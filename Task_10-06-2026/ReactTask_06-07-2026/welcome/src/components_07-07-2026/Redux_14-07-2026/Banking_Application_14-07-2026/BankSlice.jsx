import { createSlice } from "@reduxjs/toolkit";


const initialState = {

    balance:10000,

    transactions:[]

};



const BankSlice = createSlice({

    name:"bank",

    initialState,


    reducers:{


        deposit:(state,action)=>{

            state.balance += action.payload;


            state.transactions.push(
                {
                    type:"Deposit",
                    amount:action.payload
                }
            );

        },


        withdraw:(state,action)=>{

            state.balance -= action.payload;


            state.transactions.push(
                {
                    type:"Withdraw",
                    amount:action.payload
                }
            );

        },


        reset:(state)=>{

            state.balance=10000;

            state.transactions=[];

        }


    }


});


export const {deposit, withdraw,reset}=BankSlice.actions;


export default BankSlice.reducer;