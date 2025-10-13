
import React from 'react'
import TextInput from './ui/reUseAbleForm/TextInput/TextInput'
import SelectInput from './ui/reUseAbleForm/selectInput/SelectInput'
import CheckBox from './ui/reUseAbleForm/checkbox/CheckBox'
import FileInput from './ui/reUseAbleForm/fileInput/FileInput'
import TextArea from './ui/reUseAbleForm/Textarea/TextArea'

const Demo = () => {
  return (
    <div className='w-full d-flex justify-content-center'>
        <form  className='w-55 border-2 rounded-5 border p-5 mt-5'>
       
        <TextInput
        className='d-flex bg-primary'
        label="Product Name"
        name="name"
        
        placeholder="Enter name"
        />

        <SelectInput
        label='Option' 
         options={["Electronics", "Furniture", "Clothing"]}
        />

        <TextArea
        label='Text Area'
        placeholder='Enter the description'
        
        />

        <FileInput
        />

        <button>Save</button>
        </form>
    </div>
  )
}

export default Demo