let navDrawerItems = [
  {icon: 'mdi-lightbulb-outline', text: 'Notes'},
  {icon: 'mdi-reminder', text: 'Reminders'},
  {divider: true},
  {heading: 'Labels'},
  {icon: 'mdi-plus', text: 'Test Router 1', to: '/test-router-parent/test-router-1'},
  {icon: 'mdi-plus', text: 'Test Router 2', to: '/test-router-parent/test-router-2'},
  {icon: 'mdi-plus', text: 'Test Router 3', to: '/test-router-parent/test-router-3'},
  // {divider: true},
  {icon: 'mdi-archive', text: 'Archive'},
  {icon: 'mdi-delete', text: 'Trash'},
  // {divider: true},
  {
    icon: 'mdi-settings',
    text: 'Settings',
    children: [
      {icon: 'mdi-plus', text: 'Test Router 1', to: '/test-router-parent/test-router-1'},
      {
        icon: 'mdi-plus',
        text: 'Test Router 2',
        to: '/test-router-parent/test-router-2',
        children: [
          {icon: 'mdi-car', text: 'Test Router 1', to: '/test-router-parent/test-router-1'},
          {icon: 'mdi-bus', text: 'Test Router 2', to: '/test-router-parent/test-router-2'},
          {icon: 'mdi-car', text: 'Test Router 3', to: '/test-router-parent/test-router-3'},
        ]
      },
      {icon: 'mdi-plus', text: 'Test Router 3', to: '/test-router-parent/test-router-3'},
    ]
  },
  {icon: 'mdi-thought-bubble', text: 'Trash'},
  {icon: 'mdi-help', text: 'Help'},
  {
    icon: 'mdi-cellphone-link',
    text: 'App downloads',
    children: [
      {icon: 'mdi-car', text: 'Test Router 1', to: '/test-router-parent/test-router-1'},
      {icon: 'mdi-bus', text: 'Test Router 2', to: '/test-router-parent/test-router-2'},
      {icon: 'mdi-car', text: 'Test Router 3', to: '/test-router-parent/test-router-3'},
    ]
  },
  {icon: 'mdi-keyboard', text: 'Keyboard shortcuts'}
]
export {navDrawerItems}
