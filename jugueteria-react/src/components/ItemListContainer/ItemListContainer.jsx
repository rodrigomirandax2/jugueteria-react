import React, { useState, useEffect } from 'react';
import { Link, useParams} from 'react-router-dom';
import { CircularProgress, Box, Grid, Card, CardMedia, CardActionArea, CardContent, Typography} from '@mui/material';
import data from '../../api.json';
import './ItemListContainer.css'

function ItemListContainer() {
  const [figures, setFigures] = useState(null);
  const {category} = useParams();
  useEffect(() => {
    const api = setTimeout(() => {
      setFigures(data);
      if(category != 'all'){
        const filter = data.filter(f => f.type == category);
        setFigures(filter);
      }
    }, 1500);
    return () => clearTimeout(api);
  }, [category]);

  return (
   <>      
    {figures === null ? (
      <>
        <Box sx={{display: 'flex',justifyContent: 'center',alignItems: 'center',height: '100vh'}}>
          <CircularProgress />
        </Box>
      </>) : (
        <Grid container spacing={4}>
          {
            figures.map((f) => (
              <>
              <Grid item xs={3}>
                <Link to={`/item/:${f.id}`} key={f.id}>
                  <CardActionArea>
                    <Card className='Card'>
                      <CardMedia className={f.stock < 1 ? 'SinStock' : ''}
                        component="img"
                        image={f.image}
                        alt={f.nombre}
                        style={{
                          height: '50vh',
                          maxWidth: '100%',
                          maxHeight: '60vh'
                        }}
                      />
                      <CardContent>
                        <Typography className='Typography'>{f.nombre}</Typography>
                        {f.descuento ? (
                          <>
                            <div style={{ display: 'inline-block' }}>
                              <Typography className='Descuento' style={{ display: 'inline' }}>${f.valor}  </Typography>
                              <Typography className='Oferta' style={{ display: 'inline' }}>{f.porcentaje_descuento}% OFF </Typography>
                              <Typography className='Precio' style={{ display: 'inline' }}>${f.valor - (f.valor*(f.porcentaje_descuento/100))}</Typography>
                            </div>
                          </>
                        ) : (
                          <Typography className='Precio'>${f.valor}</Typography>
                        )}
                      </CardContent>
                    </Card>
                  </CardActionArea>
                </Link>
              </Grid>
              </>
            ))
          }
        </Grid>
      )}    
      </>
  );
}

export default ItemListContainer;