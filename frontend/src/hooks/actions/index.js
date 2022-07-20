import { useAppState } from '../../context/app-state-context'

export function GetMe() {
  const { appState } = useAppState()
  return appState?.user ? appState?.user : null
}
