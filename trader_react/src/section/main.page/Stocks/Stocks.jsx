import React,{useState} from "react"
import {Grid, Paper, TextField, Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: "10px",
        maxWidth: "250px",
        marginRight: "auto",
        marginLeft: "auto"
    },
  }));

function Stocks() {
    const classes = useStyles();
    const [code, setCode] = useState("")
    const [idt, setIdt] = useState("")

    const printValue = () => {
        console.log(idt)
    }

    const handleCode = (event) => {
        setCode(event.target.value)
    }

    //Chamada da Api para pegar o Idt a partir do código de uma ação
    const fetchCode = () => {
        var url = "https://localhost:44336/api/code=" + code
        fetch(url)
        .then(res => res.json())
        .then(json => {setIdt(json.m_idt)})
        .catch(err => {
            throw err;
          });
    };

    return (
        <Paper className = {classes.paper}>
            <Grid container spacing = {3} container direction="column" justify="center" alignItems="center">
                <Grid item xs={6}>
                    <TextField id="outlined-basic" label="Código" variant="outlined" onChange={handleCode}/>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" onClick={fetchCode}>
                        SEARCH
                    </Button>
                </Grid>
            </Grid>
            {idt}
        </Paper>
    );
}

export default Stocks;