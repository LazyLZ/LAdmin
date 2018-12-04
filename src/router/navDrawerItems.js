let navDrawerItems = [
  // {icon: 'mdi-lightbulb-outline', label: 'Notes'},
  // {icon: 'mdi-reminder', label: 'Reminders'},
  // {divider: true},
  {
    icon: 'mdi-file-document-box-multiple',
    label: 'Documents',
    children: [
      {label: 'Components', to: ''},
      {label: 'Function', to: ''},
      {label: 'Store', to: ''},
    ]
  },
  // {divider: true},
  // {heading: 'Debug'},
  {
    icon: 'mdi-share-variant',
    label: 'Debug',
    children: [
      {icon: 'mdi-numeric-1', label: 'Test Router 1', to: '/test-router-parent/test-router-1'},
      {icon: 'mdi-numeric-2', label: 'Test Router 2', to: '/test-router-parent/test-router-2'},
      {icon: 'mdi-numeric-3', label: 'Test Router 3', to: '/test-router-parent/test-router-3'},
    ]
  },
  // {divider: true},
  {icon: 'mdi-archive', label: 'Archive'},
  {icon: 'mdi-delete', label: 'Trash'},
  // {divider: true},
  {
    icon: 'mdi-settings',
    label: 'Settings',
    children: [
      {icon: 'mdi-plus', label: 'Test Router 1', to: '/test-router-parent/test-router-1'},
      {
        icon: 'mdi-plus',
        label: 'Test Router 2',
        to: '/test-router-parent/test-router-2',
        children: [
          {icon: 'mdi-car', label: 'Test Router 1', to: '/test-router-parent/test-router-1'},
          {icon: 'mdi-bus', label: 'Test Router 2', to: '/test-router-parent/test-router-2'},
          {icon: 'mdi-car', label: 'Test Router 3', to: '/test-router-parent/test-router-3'},
        ]
      },
      {icon: 'mdi-plus', label: 'Test Router 3', to: '/test-router-parent/test-router-3'},
    ]
  },
  {icon: 'mdi-thought-bubble', label: 'Trash'},
  {icon: 'mdi-help', label: 'Help'},
  {
    icon: 'mdi-cellphone-link',
    label: 'App downloads',
    children: [
      {icon: 'mdi-car', label: 'Test Router 1', to: '/test-router-parent/test-router-1'},
      {icon: 'mdi-bus', label: 'Test Router 2', to: '/test-router-parent/test-router-2'},
      {icon: 'mdi-car', label: 'Test Router 3', to: '/test-router-parent/test-router-3'},
    ]
  },
  {icon: 'mdi-keyboard', label: 'Keyboard shortcuts'}
]
export {navDrawerItems}
