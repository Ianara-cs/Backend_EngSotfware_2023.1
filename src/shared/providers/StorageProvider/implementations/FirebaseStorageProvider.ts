import * as admin from 'firebase-admin'
import { unlinkSync } from 'fs'
import mime from 'mime'
import { resolve } from 'path'
import upload from '../../../../config/upload'
import { type IStorageProvider } from '../IStorageProvider'

import { key } from '../../../infra/firebase/firebaseConfig'

export class FirebaseStorageProvider implements IStorageProvider {
  private readonly bucket
  private readonly serviceAccount: admin.ServiceAccount = {
    clientEmail: key.client_email, privateKey: key.private_key, projectId: key.project_id
  }

  constructor () {
    this.bucket = admin.initializeApp({
      credential: admin.credential.cert(this.serviceAccount),
      storageBucket: process.env.BUCKET_ID
    }).storage().bucket()
  }

  async save (file: string, folder: string): Promise<string> {
    const originalName = resolve(upload.tmpFolder, file)
    const ContentType = mime.getType(originalName)
    await this.bucket.upload(originalName, {
      destination: `${folder}/${file}`,
      public: true,
      metadata: {
        contentType: ContentType
      }
    }).catch(err => {
      console.error('ERROR:', err)
    })

    unlinkSync(originalName)

    const url = await this.bucket.file(`${folder}/${file}`).getSignedUrl({
      action: 'read',
      expires: '01-12-2100'
    })

    return url[0]
  };

  async delete (file: string, folder: string): Promise<void> {
    await this.bucket.file(`${folder}/${file}`).delete()
  }
}
