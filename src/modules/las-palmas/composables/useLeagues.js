import { ref } from 'vue'
import { useRouter } from 'vue-router'

import laspalmasApi from '@/api/lasPalmas'

const useLeagues = () => {
  const router = useRouter()
  const leagues = ref([])
  const isLoading = ref(false)

  const getLeagues = async () => {
    isLoading.value = true
    const { data } = await laspalmasApi.get('/leagues')
    leagues.value = data
    isLoading.value = false
  }

  getLeagues()

  return {
    isLoading,
    leagues,
    getLeagueById: ( id ) => {
      if(id) router.push({ name: 'LeagueTeams', params: { id } })
    }
  }
}

export default useLeagues