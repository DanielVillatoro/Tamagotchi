#[derive(Drop, Serde, Debug)]
#[dojo::model]
pub struct BeastId {
    #[key]
    pub id: u32,
    pub beast_id: u32,
}
