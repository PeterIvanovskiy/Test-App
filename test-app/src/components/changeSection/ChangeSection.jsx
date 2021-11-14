import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const ChangeSection = () => {
  const [value, setValue] = useState("");
  const [state, setState] = useState("");
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const handleValueChange = (e) => {
    e.preventDefault();
    setState(e.target.value);
  };

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    boxShadow: "none",
    background: "none",
  }));
  return (
    <Container
      style={{
        background: "rgb(230,247,255)",
        borderRadius: "10px",
        width: "496px",
        height: "395px",
        padding: "15px",
      }}
    >
      <Typography variant="h6">Swap</Typography>
      <Box
        style={{
          border: "2px solid rgb(145,213,255)",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          padding: "15px 10px",
          marginBottom: "15px",
        }}
      >
        <Typography variant="p" style={{ marginBottom: "15px" }}>
          FROM
        </Typography>
        <Box
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
          }}
        >
          <FormControl>
            <Select
              id="demo-simple-select"
              value={value}
              onChange={handleChange}
              style={{
                width: "95px",
                height: "35px",
                borderRadius: "31px",
                marginBottom: "15px",
              }}
            >
              <MenuItem value={"WETH"}>WETH</MenuItem>
              <MenuItem value={"DAI"}>DAI</MenuItem>
              <MenuItem value={"BAT"}>BAT</MenuItem>
              <MenuItem value={"USDC"}>USDC</MenuItem>
              <MenuItem value={"UNI"}>UNI</MenuItem>
            </Select>
          </FormControl>
          <TextField label="amount" type="text" />
        </Box>
        <Typography variant="p">Balance :{value}</Typography>
      </Box>
      <Box
        style={{
          border: "2px solid rgb(145,213,255)",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          padding: "15px 10px",
        }}
      >
        <Typography variant="p" style={{ marginBottom: "15px" }}>
          TO
        </Typography>
        <FormControl fullWidth>
          <Select
            id="demo-simple-select"
            value={state}
            onChange={handleValueChange}
            style={{
              width: "95px",
              height: "35px",
              borderRadius: "31px",
              marginBottom: "15px",
            }}
          >
            <MenuItem value={"WETH"}>WETH</MenuItem>
            <MenuItem value={"DAI"}>DAI</MenuItem>
            <MenuItem value={"BAT"}>BAT</MenuItem>
            <MenuItem value={"USDC"}>USDC</MenuItem>
            <MenuItem value={"UNI"}>UNI</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Typography
        variant="p"
        style={{ display: "flex", justifyContent: "end" }}
      >
        1 {value} = {state}
      </Typography>
      {open && (
        <Box
          style={{
            border: "2px solid rgb(145,213,255",
            background: "rgb(186,231,255)",
            borderRadius: "10px",
            padding: "5px 15px",
          }}
        >
          <Grid container columns={16}>
            <Grid item xs={8}>
              <Item>Liquidty Provider Fee</Item>
            </Grid>
            <Grid item xs={8} textAlign="right">
              <Item>0.003 ETH</Item>
            </Grid>
            <Grid item xs={8}>
              <Item>Route</Item>
            </Grid>
            <Grid item xs={8} textAlign="right">
              <Item>
                {value} &#45;&gt; {state}
              </Item>
            </Grid>
            <Grid item xs={8}>
              <Item>Price Impact</Item>
            </Grid>
            <Grid item xs={8} textAlign="right">
              <Item>-0.004%</Item>
            </Grid>
            <Grid item xs={8}>
              <Item>Minimum Recieved</Item>
            </Grid>
            <Grid item xs={8} textAlign="right">
              <Item></Item>
            </Grid>
            <Grid item xs={8}>
              <Item>Slippage Tolerance</Item>
            </Grid>
            <Grid item xs={8} textAlign="right">
              <Item>0.50%</Item>
            </Grid>
          </Grid>
        </Box>
      )}
      <Button
        fullWidth
        style={{
          color: "white",
          background: "#69C0FF",
          borderRadius: "3px",
        }}
        onClick={() => setOpen(!open)}
      >
        {open ? "APPROVE" : "SWAP"}
      </Button>
    </Container>
  );
};
export default ChangeSection;
