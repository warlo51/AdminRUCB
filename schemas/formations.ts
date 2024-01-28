export default {
  name: 'formations',
  type: 'document',
  title: 'Page Formations',
  fields: [
    {
      name: 'titre',
      type: 'string',
      title: 'Titre',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'colorTitre',
      title: 'Couleur Titre',
      type: 'simplerColor',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      type: 'array',
      title: 'Description',
      validation: (Rule) => Rule.required(),
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'Quote', value: 'blockquote'}
          ],
          lists: [
            {title: 'Bullet', value: 'bullet'},
            {title: 'Numbered', value: 'number'}
          ],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
              {title: 'Code', value: 'code'}
            ]
          }
        }
      ]
    },
    {
      name: 'linkVideo',
      type: 'string',
      title: 'Lien Video'
    }
  ]
}
