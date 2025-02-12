#[derive(Copy, Drop, Serde)]
enum BeastType {
    Light,
    Magic,
    Shadow,
    None,
}

impl IntoBeastTypeFelt252 of core::Into<BeastType, felt252> {
    #[inline(always)]
    fn into(self: BeastType) -> felt252 {
        match self {
            BeastType::None => '',
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
            BeastType::None => 0,
            BeastType::Light => 1,
            BeastType::Magic => 2,
            BeastType::Shadow => 3,
        }
    }
}

impl IntoU32BeastType of core::Into<u32, BeastType> {
    #[inline]
    fn into(self: u32) -> BeastType {
        let beast_type: u32 = self.into();
        match beast_type {
            0 =>  BeastType::None,
            1 => BeastType::Light,
            2 => BeastType::Magic,
            3 => BeastType::Shadow,
            _ =>  BeastType::None,
        }
    }
}
