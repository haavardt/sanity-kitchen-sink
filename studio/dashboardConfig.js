export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f589788e0d3ce3a50ade2e8',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-xk38ftfn',
                  apiId: 'a0268ada-f9ca-49d2-9f0a-6a5b643e986e'
                },
                {
                  buildHookId: '5f58978896ac67f92005eece',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-hvydwfri',
                  apiId: '8363b3e5-d687-42d0-af93-cc86003a1bce'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/haavardt/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-hvydwfri.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
