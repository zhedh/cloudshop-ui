import InternalLoading from './Loading'
import LoadingContainer from './LoadingContainer'

type InternalLoadingType = typeof InternalLoading

type CompoundedComponent = InternalLoadingType & {
  Container: typeof LoadingContainer

  // useForm: typeof useForm
  // useFormInstance: typeof useFormInstance
  // useWatch: typeof useWatch
  // Item: typeof Item
  // List: typeof List
  // ErrorList: typeof ErrorList
  // Provider: typeof FormProvider

  // /** @deprecated Only for warning usage. Do not use. */
  // create: () => void
}

const Loading = InternalLoading as CompoundedComponent

Loading.Container = LoadingContainer

export { Loading }
export default Loading
