import React from 'react'
import Input from 'react-toolbox/lib/input';
import PageTitle from '../../../components/PageTitle'

export const CreateProjectView = () => (
    <section>
      <PageTitle text="Create a New Project"/>
      <div className="paper">
        <Input type='text' label='Name' name='name' maxLength={16} />
        <Input type='text' label='Disabled field' disabled />
        <Input type='email' label='Email address' icon='email' />
        <Input type='tel' label='Phone' name='phone' icon='phone' />
        <Input type='text' label='Required Field' hint='With Hint' required icon={<span>J</span>} />
      </div>
    </section>
)

export default CreateProjectView
