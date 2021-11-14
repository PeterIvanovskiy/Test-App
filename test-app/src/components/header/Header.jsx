import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";

const Header = () => {
  async function loginButton() {
    const accounts = await window.ethereum
      .request({ method: "eth_requestAccounts" })
      .catch((e) => {
        console.log(e.message);
        return;
      });
    if (!accounts) return;
    window.userWalletAddress = accounts[0];
  }

  return (
    <Container
      style={{
        display: "flex",
        maxWidth: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 30px",
      }}
    >
      <img
        src="data:image/png;base64,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"
        alt="logo"
      />
      <Box
        style={{
          borderRadius: "10px",
          border: "4px solid rgb(230,247,255)",
          padding: "15px 20px",
        }}
      >
        <Button
          style={{ background: "#e6f7ff", borderRadius: "3px", color: "black" }}
        >
          <span>Swap</span>
        </Button>
        <Button style={{ color: "black" }}>
          <span>Claim</span>
        </Button>
      </Box>
      <Button
        style={{
          background: "#e6f7ff",
          borderRadius: "10px",
          padding: "5px 30px",
          color: "black",
        }}
        onClick={() => loginButton()}
      >
        <span>Connect Wallet</span>
      </Button>
    </Container>
  );
};
export default Header;
