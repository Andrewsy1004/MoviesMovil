import React from "react";
import { View, Text, FlatList } from "react-native";
import { Cast } from "../../../core/entities/cast.entity";
import { FullMovie } from "../../../core/entities/movie.entity";
import { Formatter } from "../../../config/helpers/formatter";
import { CastActor } from "../cast/CastActor";


interface Props {
    movie: FullMovie;
    cast: Cast[]
  }
  
  export const MovieDetails = ({movie, cast}: Props) => {
    return (
      <>
        <View style={{marginHorizontal: 20}}>
          <View style={{flexDirection: 'row'}}>
            <Text>{movie.rating}</Text>
            <Text style={{marginLeft: 5}}>- {movie.genres.join(', ')}</Text>
          </View>
  
          <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>
            History
          </Text>
          <Text style={{ fontSize: 16 }}>{ movie.description }</Text>
  
          <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
            Budget
          </Text>
  
          <Text style={{ fontSize: 18 }}>
            { Formatter.currency( movie.budget) }
          </Text>
        </View>
  
        {/* Casting */}
        <View style={{ marginTop: 10, marginBottom: 50 }}>
          <Text style={{
            fontSize: 23,
            marginVertical: 10,
            fontWeight: 'bold',
            marginHorizontal: 20
          }}>
            Actors
          </Text>
  
  
         <FlatList 
            data={ cast }
            keyExtractor={ (item) => item.id.toString() }
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={ ({item}) => <CastActor actor={ item } /> }
         />

         
        </View>
      </>
    );
  };