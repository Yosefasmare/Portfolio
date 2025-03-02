const testimonySchema = {
    name: 'testimony',
    title: 'Testimony',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'postion',
        title: 'Postion',
        type: 'string',
      },
      {
        name: 'picture',
        title: 'Picture',
        type: 'image',
        options: {
          hotspot: true,
        }
      },
      {
        name: 'testimontMessage',
        title: 'Testimont Message',
        type: 'text',
      }
    ]
  }

  export default testimonySchema