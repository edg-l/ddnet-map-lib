export enum TileTypes {
    AIR = 0,
    SOLID,
    DEATH,
    NOHOOK,
    NOLASER,
    THROUGH_CUT,
    THROUGH,
    JUMP,
    FREEZE = 9,
    TELEINEVIL,
    UNFREEZE,
    DFREEZE,
    DUNFREEZE,
    TELEINWEAPON,
    TELEINHOOK,
    WALLJUMP = 16,
    EHOOK_START,
    EHOOK_END,
    HIT_START,
    HIT_END,
    SOLO_START,
    SOLO_END,
    //Switches
    SWITCHTIMEDOPEN = 22,
    SWITCHTIMEDCLOSE,
    SWITCHOPEN,
    SWITCHCLOSE,
    TELEIN,
    TELEOUT,
    BOOST,
    TELECHECK,
    TELECHECKOUT,
    TELECHECKIN,
    REFILL_JUMPS = 32,
    BEGIN,
    END,
    CHECKPOINT_FIRST = 35,
    CHECKPOINT_LAST = 59,
    STOP = 60,
    STOPS,
    STOPA,
    TELECHECKINEVIL,
    CP,
    CP_F,
    THROUGH_ALL,
    THROUGH_DIR,
    TUNE1,
    OLDLASER = 71,
    NPC,
    EHOOK,
    NOHIT,
    NPH,
    UNLOCK_TEAM,
    PENALTY = 79,
    NPC_END = 88,
    SUPER_END,
    JETPACK_END,
    NPH_END,
    BONUS = 95,
    TELE_GUN_ENABLE = 96,
    TELE_GUN_DISABLE = 97,
    ALLOW_TELE_GUN = 98,
    ALLOW_BLUE_TELE_GUN = 99,
    NPC_START = 104,
    SUPER_START,
    JETPACK_START,
    NPH_START,
    TELE_GRENADE_ENABLE = 112,
    TELE_GRENADE_DISABLE = 113,
    TELE_LASER_ENABLE = 128,
    TELE_LASER_DISABLE = 129,
    CREDITS_1 = 140,
    CREDITS_2 = 141,
    CREDITS_3 = 142,
    CREDITS_4 = 143,
    CREDITS_5 = 156,
    CREDITS_6 = 157,
    CREDITS_7 = 158,
    CREDITS_8 = 159,
    ENTITIES_OFF_1 = 190,
    ENTITIES_OFF_2,
}