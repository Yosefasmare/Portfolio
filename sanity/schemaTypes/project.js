const projectSchema = {
    name: 'projects',
    title: 'Projects',
    type: 'document',
    fields: [
      {
        name: 'NameoftheProject',
        title: 'Name of the Project',
        type: 'string',
      },
      {
        name: 'urlorpath',
        title: 'url or path',
        type: 'url',
      },
      {
        name: 'techUsed',
        title: 'Tech Used',
        type: 'array',
        of: [{ type: 'image' }]
      },
      {
        name: 'dicription',
        title: 'discription',
        type: 'text',
      },
      {
        name: 'Banner',
        title: 'Banner',
        type: 'image',
        options: {
          hotspot: true,
        }
      }
    ]
  }

  export default projectSchema