import React from 'react'
import AddMemberForm from '../components/Dashboard/MemberForm/AddMemberForm'
import ECNMembers from '../components/Dashboard/ECNmembers/ECNMembers'

const ECNmember = () => {
  return (
    <div>
      <AddMemberForm />
      <ECNMembers />
    </div>
  )
}

export default ECNmember