// Starknet import
use starknet::ContractAddress;
use core::dict::Felt252Dict;

// Model imports
use babybeasts::models::beast::{Beast};

#[derive(Drop, Serde, Debug)]
#[dojo::model]
pub struct Player {
    #[key]
    pub address: ContractAddress, 
    pub remaining_food: u32,
    pub current_beast_id: u32
}
