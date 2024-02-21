import { Text, View } from 'react-native';
import { useMovies } from '../../hooks/useMovies';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { PosterCarousel } from '../../components/movies/PosterCarousel';
import { useEffect, useState } from 'react';
import { ScreenStart } from './ScreenStart';
import { HorizontalCarousel } from '../../components/movies/HorizontalCarousel';
import { FullScreenLoader } from '../../components/loaders/FullScreenLoader';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();

  const {isLoading, nowPlaying, popular, topRated, upcoming, popularNextPage, topRatedNextPage, upcomingNextPage} = useMovies();
  const [isLoadingScreen, setIsLoadingScreen] = useState(true);
  

  useEffect(() => {
    setTimeout(() => {
      setIsLoadingScreen(false);
    }, 2000)
  }, [])

  if(isLoadingScreen ) return <ScreenStart />;
  if (isLoading) return (<FullScreenLoader />);
  
  return (
    <ScrollView>
      <View style={{marginTop: top + 20, paddingBottom: 30}}>
       <PosterCarousel movies={nowPlaying} />
       <HorizontalCarousel movies={popular}  title="Popular"   loadNextPage={popularNextPage}  />
       <HorizontalCarousel movies={topRated} title="Top Rated" loadNextPage={topRatedNextPage} />
       <HorizontalCarousel movies={upcoming} title="Upcoming"  loadNextPage={upcomingNextPage} />
      </View>
    </ScrollView>
  )
}