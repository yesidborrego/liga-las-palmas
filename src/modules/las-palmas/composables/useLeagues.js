import { ref } from 'vue'
import { useRouter } from 'vue-router'

import laspalmasApi from '@/api/lasPalmas'

const useLeagues = () => {
  const router = useRouter()
  const leagues = ref([])
  const isLoading = ref(false)

  const getLeagues = async () => {
    isLoading.value = true
    try {
      const { data } = await laspalmasApi.get('/leagues')
      leagues.value = data
      isLoading.value = false

    } catch (error) {
      console.log(error)
    }
  }

  getLeagues()

  return {
    isLoading,
    leagues,
    goLeagueTeams: ( {id, name} ) => {
      if(id) router.push({ name: 'LeagueTeams', params: { id, name } })
    }
  }
}

export default useLeagues