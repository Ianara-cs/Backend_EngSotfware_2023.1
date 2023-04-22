import { container } from 'tsyringe'
import { FirebaseStorageProvider } from './StorageProvider/implementations/FirebaseStorageProvider'
import { LocalStorageProvider } from './StorageProvider/implementations/LocalStorageProvider'
import { type IStorageProvider } from './StorageProvider/IStorageProvider'

export enum INJECTS_PROVIDER {
  STORAGE = 'STORAGE_PROVIDER'
}

const diskStorage = {
  local: LocalStorageProvider,
  firebase: FirebaseStorageProvider
}

container.registerSingleton<IStorageProvider>(
  INJECTS_PROVIDER.STORAGE,
  diskStorage.firebase
)
