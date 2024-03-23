import { Spinner, Text, Image } from "@chakra-ui/react";
import "./App.css";
import useTopAnime from "./hooks/useTopAnime";
import InfiniteScroll from "react-infinite-scroll-component";
import React from "react";

function App() {
  const { data, error, fetchNextPage, hasNextPage } = useTopAnime();

  if (error) return <Text>{error.message}</Text>;
  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.data.length, 0) || 0;

  return (
    <>
      <InfiniteScroll
        dataLength={fetchedGamesCount}
        hasMore={!!hasNextPage}
        next={() => fetchNextPage()}
        loader={<Spinner />}
      >
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.data.map((anime) => (
              <Image
                key={anime.mal_id}
                src={anime.images.webp.large_image_url}
              ></Image>
            ))}
          </React.Fragment>
        ))}
      </InfiniteScroll>
    </>
  );
}

export default App;
