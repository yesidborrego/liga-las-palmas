export default {
  name: 'Laspalmas',
  component: () => import(/* webpackChunkName:'las-palmas' */ '@/modules/las-palmas/layouts/LasPalmas.vue'),
  children: [
    {
      path: '/leagues',
      name: 'Leagues',
      component: () => import(/* webpackChunkName: "leagues" */ '@/modules/las-palmas/views/Leagues.vue')
    },
    {
      path: '/leagues/teams',
      name: 'LeagueTeams',
      component: () => import(/* webpackChunkName:'league-eams-entry' */ '@/modules/las-palmas/views/LeagueTeams.vue'),
      props: (route) => {
        return {
          id: route.params.id,
          name: route.params.name
        }
      }
    },
    {
      path: '/teams/players',
      name: 'TeamsPlayers',
      component: () => import(/* webpackChunkName:'league-eams-entry' */ '@/modules/las-palmas/views/TeamsPlayers.vue'),
      props: (route) => {
        return {
          id: route.params.id,
          name: route.params.name
        }
      }
    },
    {
      path: '/teams',
      name: 'Teams',
      component: () => import(/* webpackChunkName: "teams" */ '@/modules/las-palmas/views/Teams.vue')
    },
    {
      path: '/players',
      name: 'Players',
      component: () => import(/* webpackChunkName: "players" */ '@/modules/las-palmas/views/Players.vue')
    },
  ]
}