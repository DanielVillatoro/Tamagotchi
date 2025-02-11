#[derive(Copy, Drop, Serde)]
enum BeastType {
    Light,
    Magic,
    Shadow,
}

impl IntoBeastTypeFelt252 of core::Into<BeastType, felt252> {
    #[inline(always)]
    fn into(self: BeastType) -> felt252 {
        match self {
            BeastType::Light => 'Light',
            BeastType::Magic => 'Magic',
            BeastType::Shadow => 'Shadow',
        }
    }
}

impl IntoBeastTypeU32 of core::Into<BeastType, u32> {
    #[inline(always)]
    fn into(self: BeastType) -> u32 {
        match self {
            BeastType::Light => 0,
            BeastType::Magic => 1,
            BeastType::Shadow => 2,
        }
    }
}
