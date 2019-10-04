class filtro{
    constructor(){
        this.criterio;
    }
    setCriterio(criterio){
        this.criterio=criterio;
    }

    fNombre(pelicula,criterio){
        this.setCriterio(criterio);
        if(pelicula.getNombre()==this.criterio){
            return true;
        }
        return false;
    }

    fAutor(pelicula){
        if(pelicula.getAutor()==this.criterio){
            return true;
        }
        return false;
    }

    fFecha(pelicula){
        if(pelicula.getFecha()==this.criterio){
            return true;
        }
        return false;
    }
    
    fGenerp(pelicula){
        if(pelicula.getGeneros()==this.criterio){
            return true;
        }
        return false;
    }
}