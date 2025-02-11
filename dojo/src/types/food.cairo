#[derive(Copy, Drop, Serde)]
enum FoodType {
    Apple,
    Banana,
    Cherry,
    Burguer,
    CakeChocolate,
    CakeStrawberry,
    Cheese,
    Chicken,
    Eggs,
    Fish,
    FrenchFries,
    BlueBerry,
    Beef,
    Pizza,
    Corn,
    Potato
}

impl IntoFoodTypeFelt252 of core::Into<FoodType, felt252> {
    #[inline(always)]
    fn into(self: FoodType) -> felt252 {
        match self {
            FoodType::Apple => 'Apple',
            FoodType::Banana => 'Banana',
            FoodType::Cherry => 'Cherry',
            FoodType::Burguer => 'Burguer',
            FoodType::CakeChocolate => 'Cake Chocolate',
            FoodType::CakeStrawberry => 'Cake Strawberry',
            FoodType::Cheese => 'Cheese',
            FoodType::Chicken => 'Chicken',
            FoodType::Eggs => 'Eggs',
            FoodType::Fish => 'Fish',
            FoodType::FrenchFries => 'French Fries',
            FoodType::BlueBerry => 'BlueBerry',
            FoodType::Beef => 'Beef',
            FoodType::Pizza => 'Pizza',
            FoodType::Corn => 'Corn',
            FoodType::Potato => 'Potato',
        }
    }
}

impl IntoFoodTypeU8 of core::Into<FoodType, u8> {
    #[inline(always)]
    fn into(self: FoodType) -> u8 {
        match self {
            FoodType::Apple => 0,
            FoodType::Banana => 1,
            FoodType::Cherry => 2,
            FoodType::Burguer => 3,
            FoodType::CakeChocolate => 4,
            FoodType::CakeStrawberry => 5,
            FoodType::Cheese => 6,
            FoodType::Chicken => 7,
            FoodType::Eggs => 8,
            FoodType::Fish => 9,
            FoodType::FrenchFries => 10,
            FoodType::BlueBerry => 11,
            FoodType::Beef => 12,
            FoodType::Pizza => 13,
            FoodType::Corn => 14,
            FoodType::Potato => 15,
        }
    }
}


#[cfg(test)]
mod tests {
    use super::{FoodType, IntoFoodTypeFelt252, IntoFoodTypeU8};

    #[test]
    #[available_gas(1000000)]
    fn test_food_type_into_felt252() {
        // Test the conversion of each food type to felt252
        let apple = FoodType::Apple;
        let banana = FoodType::Banana;
        let cherry = FoodType::Cherry;

        assert_eq!(apple.into(), 'Apple', "FoodType::Apple should be converted to 'Apple'");
        assert_eq!(banana.into(), 'Banana', "FoodType::Banana should be converted to 'Banana'");
        assert_eq!(cherry.into(), 'Cherry', "FoodType::Cherry should be converted to 'Cherry'");
    }

    #[test]
    #[available_gas(1000000)]
    fn test_food_type_into_u8() {
        // Test the conversion of each food type to u8
        let apple = FoodType::Apple;
        let banana = FoodType::Banana;
        let cherry = FoodType::Cherry;

        assert_eq!(apple.into(), 0_u8, "FoodType::Apple should be converted to 0");
        assert_eq!(banana.into(), 1_u8, "FoodType::Banana should be converted to 1");
        assert_eq!(cherry.into(), 2_u8, "FoodType::Cherry should be converted to 2");
    }
}