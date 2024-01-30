import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Button, CircularProgress, Grid, Typography } from '@mui/material';
import data from '../../api.json';
import './ItemListDetail.css';

function ItemListDetail() {
    const {id} = useParams();

    const [figuras, setFiguras] = useState([]);
    const [figuraFiltrada, setFiguraFiltrada] = useState(null);
    useEffect(() => {
        const api = setTimeout(() => {
          setFiguras(data);
        }, 1500);
        return () => clearTimeout(api);
    }, []);
    
    useEffect(() => {
        const identificador = parseInt(id.slice(1));
        const filter = figuras.filter(f => f.id == identificador);
        setFiguraFiltrada(filter[0]);
    }, [figuras, id]);

    return (
        <>
        {figuraFiltrada ? (
            <>
            <Grid container spacing={2}>
                <Grid item spacing={2} md={6} style={{ display: 'flex', justifyContent: 'center' }}>
                    <img src={figuraFiltrada.image} alt="Imagen" style={{ maxWidth: '70%', margin: 'auto' }} />
                </Grid>
                <Grid item spacing={2} md={6}>
                    <Grid>
                        <h1>{figuraFiltrada.nombre}</h1>
                        <p style={{maxWidth:'80%'}}>{figuraFiltrada.descripcion}</p>
                        {figuraFiltrada.descuento ? (
                          <>
                            <div style={{ display: 'block' }}>
                                <div style={{ display: 'inline-block' }}>
                                    Valor: <Typography className='Descuento' style={{ display: 'inline' }}>${figuraFiltrada.valor}</Typography>
                                </div>
                            </div>
                            <div style={{ display: 'block' }}>
                                <div style={{ display: 'inline-block' }}>
                                    <Typography className='Oferta' style={{ display: 'inline' }}>{figuraFiltrada.porcentaje_descuento}% OFF </Typography>
                                    <Typography className='Precio' style={{ display: 'inline' }}>${figuraFiltrada.valor - (figuraFiltrada.valor*(figuraFiltrada.porcentaje_descuento/100))}</Typography>
                                </div>
                            </div>
                          </>
                        ) : (
                          <Typography className='Precio'>Valor: ${figuraFiltrada.valor}</Typography>
                        )}
                        <div style={{  textAlign: 'left' }}>
                            <Button style={{ backgroundColor: 'orange', color: 'white', textAlign: 'center' }}>
                                Agregar al carro
                            </Button>
                        </div>
                       
                    </Grid>
                </Grid>
            </Grid>

            </>
            ) : (
            <>
                <Box sx={{display: 'flex',justifyContent: 'center',alignItems: 'center',height: '100vh'}}>
                    <CircularProgress />
                </Box>
            </>) 
          }
        </>
        

    )
}

export default ItemListDetail