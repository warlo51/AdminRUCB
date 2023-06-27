export default {
  name: 'imagesPageAccueil',
  type: 'document',
  title: 'Images Page Accueil',
  fields: [
    {
      name: 'titre',
      type: 'string',
      title: 'Titre'
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
      options: {
        hotspot: true
      },
      title: 'Image'
    },
    {
      name: 'colorTexte',
      title: 'Couleur texte',
      type: 'color'
    },
    {
      name: 'colorBackgroundButton',
      title: 'Couleur Fond Button',
      type: 'color'
    },
    {
      name: 'colorTextButton',
      title: 'Couleur Texte Button',
      type: 'color'
    }
  ]
}
