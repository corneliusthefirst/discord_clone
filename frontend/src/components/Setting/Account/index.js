import React from 'react'
import { useAppState } from '../../../context/app-state-context'
import { Me } from '../../../hooks/reactQuery'
import Card from './Card'

export default function Account() {
  const { appState } = useAppState()
  const { user } = appState.user

  const { data: userData } = Me(user)

  return (
    <div className='flex flex-col mt-2'>
      <Card user={userData} />
    </div>
  )
}
