import React, { useEffect } from "react";
import { Grid, CircularProgress } from '@mui/material';
import { useInfiniteQuery } from "@tanstack/react-query";

import Product from "./Product";
import { makeStyles } from '@mui/styles';
import { getProduct } from "../api/getProduct";
import { useInView } from "react-intersection-observer";

const useStyles = makeStyles(() => ({
  loading: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  content: {
    flexGrow: 1,
    backgroundColor: 'white',
    padding: '20px 50px 75px',
  },
  root: {
    flexGrow: 1,
  },
}));

const Products = () => {
  const classes = useStyles();
  const { ref, inView } = useInView();
  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(['getProduct'], getProduct, {
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.nextPage < lastPage.totalPages) return lastPage.nextPage;
      return undefined;
    }
  })

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  if (isLoading) {
    return (
      <div className={classes.loading}>
        <CircularProgress />
      </div>
    );
  }

  if (isError) {
    return <div>Error! {error.message}</div>
  }

  return (
    <main className={classes.content}>
      <Grid container justify="center" spacing={4}>
        {
          data.pages.map((page) =>
            page.data.products.map((product) => (
              <Grid ref={ref} item key={product.id} xs={12} sm={6} md={4} lg={3}>
                <Product product={product} />
              </Grid>
            )))
        }
      </Grid>
      {isFetchingNextPage &&
        <div className={classes.loading}>
          <CircularProgress />
        </div>}
    </main >
  );
};

export default Products;
