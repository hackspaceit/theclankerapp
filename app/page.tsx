"use client";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import {
  useMiniKit,
  useAddFrame,
  
} from "@coinbase/onchainkit/minikit";
import {
  Name,
  Identity,
  Address,
  Avatar,
  EthBalance,
} from "@coinbase/onchainkit/identity";
import {
  ConnectWallet,
  Wallet,
  WalletDropdown,
  WalletDropdownDisconnect,
} from "@coinbase/onchainkit/wallet";
import { useEffect, useMemo, useState, useCallback } from "react";
import { Button } from "./components/DemoComponents";
import { Icon } from "./components/DemoComponents"
import TokenDeployForm from './components/TokenDeployForm';

export default function App() {
  const { setFrameReady, isFrameReady, context } = useMiniKit();
  const [frameAdded, setFrameAdded] = useState(false);


  const addFrame = useAddFrame();
 
  useEffect(() => {
    if (!isFrameReady) {
      setFrameReady();
    }
  }, [setFrameReady, isFrameReady]);

  const handleAddFrame = useCallback(async () => {
    const frameAdded = await addFrame();
    setFrameAdded(Boolean(frameAdded));
  }, [addFrame]);

  //useless comment

  const saveFrameButton = useMemo(() => {
    if (context && !context.client.added) {
      return (
        <Button
          variant="ghost"
          size="sm"
          onClick={handleAddFrame}
          className="text-[var(--app-accent)] p-4"
          icon={<Icon name="plus" size="sm" />}
        >
          Save Frame
        </Button>
      );
    }

    if (frameAdded) {
      return (
        <div className="flex items-center space-x-1 text-sm font-medium text-[#0052FF] animate-fade-out">
          <Icon name="check" size="sm" className="text-[#0052FF]" />
          <span>Saved</span>
        </div>
      );
    }

    return null;
  }, [context, frameAdded, handleAddFrame]);

  return (
    <div className="flex flex-col min-h-screen font-sans text-[var(--app-foreground)] mini-app-theme from-[var(--app-background)] to-[var(--app-gray)]">
      <div className="w-full max-w-md mx-auto px-4 py-3">
       <header></header>
        

        <main className="flex-1">
         <Card sx={{ maxWidth: 430 }}>
      <CardMedia
        sx={{ height: 170 }}
        image="/hero.jpeg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Become a Boss..
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         <TokenDeployForm />
          Cook up your own token on Clanker with whatever market cap you want. You’re the boss!
          
        </Typography>
      </CardContent>
      <CardActions>
     <div>
            <div className="flex items-center space-x-2">
              <Wallet className="z-10">
                <ConnectWallet className="!bg-[#0033FF] !text-[#222] !border !border-[#FFFFFF] !rounded hover:!bg-[#222] !transition-colors !font-mono !px-4 !py-2">
                  <Name className="!text-[#FFFFFF]" /> 
                </ConnectWallet>
                <WalletDropdown>
                  <Identity className="px-4 pt-3 pb-2" hasCopyAddressOnClick>
                    <Avatar />
                    <Name />
                    <Address />
                    <EthBalance />
                  </Identity>
                  <WalletDropdownDisconnect />
                </WalletDropdown>
              </Wallet>
            </div>
          </div>
          <div>{saveFrameButton}</div>    
      </CardActions>
    </Card> 

          
        
        </main>

        <footer className="mt-2 pt-4 flex justify-center">
         
          
         
       
        </footer>
      </div>
    </div>
  );
}
