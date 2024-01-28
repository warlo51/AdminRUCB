export default {
  title: 'Dossier de Licence',
  name: 'dossierLicence',
  type: 'document',
  fields: [
    {
      name: 'fichier',
      type: 'file',
      title: 'fichier',
      validation: (Rule) => Rule.required(),
    }
  ]
}
