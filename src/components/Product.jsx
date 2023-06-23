import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Rating,
  Typography,
} from '@mui/material'
import StarIcon from '@mui/icons-material/Star';
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: "100%",
    height: "100%",
    borderRadius: "10px !important"
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
    color: "#032953"
  },
  description: {
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden"
  },
  rating: {
    '& .MuiRating-iconFilled': {
      color: '#0082ef',
    },
  }
}));

const Product = ({ product }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.thumbnail}
        title={product.title}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {product.title}
          </Typography>
          <Typography variant="h5">
            ${product.price}
          </Typography>
        </div>
        <Typography
          className={classes.description}
          dangerouslySetInnerHTML={{ __html: product.description }}
          variant="body2"
          color="textSecondary"
        />
        <br />
        <Rating
          className={classes.rating}
          name="text-feedback"
          value={product.rating}
          color="#0082ef"
          readOnly
          precision={0.5}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} color="#0082ef" fontSize="inherit" />}
        />
      </CardContent>
    </Card>
  );
};

export default Product;
