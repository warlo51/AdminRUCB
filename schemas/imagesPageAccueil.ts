export default {
  name: 'imagesPageAccueil',
  type: 'document',
  title: 'Images Bandeau Déroulant Accueil',
  fields: [
    {
      name: 'titre',
      type: 'string',
      title: 'Titre',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'linkArticle',
      type: 'reference',
      title: 'Lien Article Actualite',
      to: {type: 'actus'}
    },
    {
      name: 'active',
      type: 'string',
      title: 'Activer',
      options: {
        list: [
          { title: 'Oui', value: 'Oui' },
          { title: 'Non', value: 'Non' },
        ],
      },
    },
    {
      name: 'image',
      type: 'image',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true
      },
      title: 'Image'
    },
    {
      name: 'colorTexte',
      title: 'Couleur texte',
      type: 'simplerColor',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'colorBackgroundButton',
      title: 'Couleur Fond Button',
      type: 'simplerColor',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'colorTextButton',
      title: 'Couleur Texte Button',
      type: 'simplerColor',
      validation: (Rule) => Rule.required(),
    }
  ]
}
