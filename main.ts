namespace SpriteKind {
    export const Goal = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile72`, function (sprite, location) {
    mySprite = sprites.create(assets.image`Security Guard Looking at camera`, SpriteKind.Player)
})
function giveIntroduction () {
	
}
function createEnemies2 () {
    for (let Foxy of tiles.getTilesByType(assets.tile`myTile99`)) {
    	
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile45`, function (sprite, location) {
    game.showLongText("WOW! THIS IS WHAT YE GET!!", DialogLayout.Center)
    myEnemy = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . e e e . . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . e e e e e e e e . . . . . 
        . . . 2 2 2 2 2 2 2 2 . . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . 2 2 2 2 2 2 2 2 . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . 2 2 2 2 2 2 . . . . . . 
        . . e e e e e e e e e e e . . . 
        . . 2 2 2 2 2 2 2 2 . . . . . . 
        . . . . e e e . . e . . . . . . 
        . . . . 2 2 2 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    myEnemy.follow(mySprite)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile119`, function (sprite, location) {
    info.startCountdown(10)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile113`, function (sprite, location) {
    music.stopAllSounds()
    music.play(music.createSong(assets.song`GAME OVER Sound`), music.PlaybackMode.UntilDone)
    tiles.setCurrentTilemap(tilemap`level19`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile115`, function (sprite, location) {
    music.stopAllSounds()
    music.play(music.createSong(assets.song`GAME OVER Sound`), music.PlaybackMode.UntilDone)
    tiles.setCurrentTilemap(tilemap`level2`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile117`, function (sprite, location) {
    game.showLongText("BAHBAHBRRR!!", DialogLayout.Bottom)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile112`, function (sprite, location) {
    game.showLongText("WOW! THIS IS WHAT YE GET!!", DialogLayout.Center)
    myEnemy = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . e e e . . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . e e e e e e e e . . . . . 
        . . . 2 2 2 2 2 2 2 2 . . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . 2 2 2 2 2 2 2 2 . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . 2 2 2 2 2 2 . . . . . . 
        . . e e e e e e e e e e e . . . 
        . . 2 2 2 2 2 2 2 2 . . . . . . 
        . . . . e e e . . e . . . . . . 
        . . . . 2 2 2 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    myEnemy.follow(mySprite)
})
info.onCountdownEnd(function () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    game.setGameOverEffect(true, effects.confetti)
    game.showLongText("6:00   THANKS FOR PLAYING DEMO!! Press Menu to Restart! or Press Down to resume!        Also Play Mario: The last Castle!", DialogLayout.Full)
    music.play(music.createSong(assets.song`YAYYY YOU BEAT THE DEMO`), music.PlaybackMode.UntilDone)
    myEnemy = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . a a a a a a a . . . . . 
        . . . a a f f a f f a a . . . . 
        . . . a a f 1 a 1 f a a . . . . 
        . . . a a f 1 a 1 f a a . . . . 
        . . . a a a a a a a a a . . . . 
        . . . a a f f f f f a a . . . . 
        . . . . a a f f f a a . . . . . 
        . . . . . a a a 5 a . . . . . . 
        . . . . a a a a a a a . . . . . 
        . . . a a a a a a a a a . . . . 
        . . . . a a a . a a a . . . . . 
        . . . . . a a . a a . . . . . . 
        . . . . . a a . a a . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    myEnemy.follow(mySprite, 200)
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile99`, function (sprite, location) {
    myEnemy = sprites.create(img`
        .................
        ...22...2...22...
        ...232.222.232...
        ....2b22222b2....
        .....ccc2ff2.....
        ....22cc2ff22....
        .....223f322.....
        ...22223332222...
        ......21f12......
        ....2b32223b2....
        ....2.33ff3.2....
        ....2.2ff32.2....
        ...cc.22222.22...
        ...cc.eeeee.22...
        ...d..ee.ee..2...
        ...dd.ee.ee......
        .......b.b.......
        ......bb.bb......
        `, SpriteKind.Enemy)
    myEnemy.follow(mySprite, 100)
    music.play(music.melodyPlayable(music.footstep), music.PlaybackMode.LoopingInBackground)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile54`, function (sprite, location) {
    music.stopAllSounds()
    music.play(music.createSong(assets.song`FNAF Darkened Times Theme Outside`), music.PlaybackMode.LoopingInBackground)
    tiles.setCurrentTilemap(tilemap`level2`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile49`, function (sprite, location) {
    game.showLongText("WOW! THIS IS WHAT YE GET!!", DialogLayout.Center)
    myEnemy = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . e e e . . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . e e e e e e e e . . . . . 
        . . . 2 2 2 2 2 2 2 2 . . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . 2 2 2 2 2 2 2 2 . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . 2 2 2 2 2 2 . . . . . . 
        . . e e e e e e e e e e e . . . 
        . . 2 2 2 2 2 2 2 2 . . . . . . 
        . . . . e e e . . e . . . . . . 
        . . . . 2 2 2 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    myEnemy.follow(mySprite)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile50`, function (sprite, location) {
    game.showLongText("WOW! THIS IS WHAT YE GET!!", DialogLayout.Center)
    myEnemy = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . e e e . . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . e e e e e e e e . . . . . 
        . . . 2 2 2 2 2 2 2 2 . . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . 2 2 2 2 2 2 2 2 . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . 2 2 2 2 2 2 . . . . . . 
        . . e e e e e e e e e e e . . . 
        . . 2 2 2 2 2 2 2 2 . . . . . . 
        . . . . e e e . . e . . . . . . 
        . . . . 2 2 2 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    myEnemy.follow(mySprite)
})
function createEnemies () {
    for (let value of tiles.getTilesByType(assets.tile`myTile55`)) {
    	
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile111`, function (sprite, location) {
    game.showLongText("WOW! THIS IS WHAT YE GET!!", DialogLayout.Center)
    myEnemy = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . e e e . . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . e e e e e e e e . . . . . 
        . . . 2 2 2 2 2 2 2 2 . . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . 2 2 2 2 2 2 2 2 . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . 2 2 2 2 2 2 . . . . . . 
        . . e e e e e e e e e e e . . . 
        . . 2 2 2 2 2 2 2 2 . . . . . . 
        . . . . e e e . . e . . . . . . 
        . . . . 2 2 2 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    myEnemy.follow(mySprite)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile43`, function (sprite, location) {
    music.stopAllSounds()
    music.play(music.createSong(assets.song`FNAF DARKENED TIMES THEME Inside`), music.PlaybackMode.LoopingInBackground)
    tiles.setCurrentTilemap(tilemap`level6`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile47`, function (sprite, location) {
    game.showLongText("WOW! THIS IS WHAT YE GET!!", DialogLayout.Center)
    myEnemy = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . e e e . . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . e e e e e e e e . . . . . 
        . . . 2 2 2 2 2 2 2 2 . . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . 2 2 2 2 2 2 2 2 . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . 2 2 2 2 2 2 . . . . . . 
        . . e e e e e e e e e e e . . . 
        . . 2 2 2 2 2 2 2 2 . . . . . . 
        . . . . e e e . . e . . . . . . 
        . . . . 2 2 2 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    myEnemy.follow(mySprite)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile107`, function (sprite, location) {
    game.showLongText("DON'T TOUCH ME WATER! AND GET OUT OF THE WAY MATE! And Also,Leave the demon to his demons. Rest your own soul. There is nothing else... DO YOUR JOB!", DialogLayout.Bottom)
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    music.stopAllSounds()
    tiles.setCurrentTilemap(tilemap`level2`)
    music.play(music.createSong(assets.song`FNAF Darkened Times Theme Outside`), music.PlaybackMode.LoopingInBackground)
    info.setLife(1)
    mySprite = sprites.create(assets.image`Security Guard Looking at camera`, SpriteKind.Player)
    controller.moveSprite(mySprite)
    scene.cameraFollowSprite(mySprite)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile105`, function (sprite, location) {
    game.showLongText("Hey! WASSAP MAN!! There's Some Really Freaky Stuff MAN!!", DialogLayout.Bottom)
})
info.onLifeZero(function () {
    music.play(music.createSong(assets.song`GAME OVER Sound`), music.PlaybackMode.UntilDone)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile109`, function (sprite, location) {
    game.showLongText("WOW! THIS IS WHAT YE GET!!", DialogLayout.Center)
    myEnemy = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . e e e . . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . e e e e e e e e . . . . . 
        . . . 2 2 2 2 2 2 2 2 . . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . 2 2 2 2 2 2 2 2 . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . 2 2 2 2 2 2 . . . . . . 
        . . e e e e e e e e e e e . . . 
        . . 2 2 2 2 2 2 2 2 . . . . . . 
        . . . . e e e . . e . . . . . . 
        . . . . 2 2 2 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    myEnemy.follow(mySprite)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile116`, function (sprite, location) {
    music.stopAllSounds()
    music.play(music.createSong(assets.song`GAME OVER Sound`), music.PlaybackMode.UntilDone)
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile55`, function (sprite, location) {
    myEnemy = sprites.create(assets.image`freddy standing still`, SpriteKind.Enemy)
    myEnemy.follow(mySprite, 60)
    music.play(music.melodyPlayable(music.footstep), music.PlaybackMode.LoopingInBackground)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile104`, function (sprite, location) {
    mySprite2 = sprites.create(img`
        77777777777777e77777
        7777772222222b777777
        77777222222222277777
        77777ee444f447777777
        77777ee444f447777777
        77777e4444f447777777
        77777e4ee44444477777
        77777e4eeeeee4477777
        77777e4eeeeee4477777
        77722f8888888f777777
        77222f8888888f777777
        77222f8888888f777777
        77222f8888888f777777
        77177fffffffff777777
        777ff7777ccccc777777
        777777777ccccc777777
        777777777ccccc777777
        777777777ccccc777777
        777777777ccccc777777
        77777777777777777777
        `, SpriteKind.Player)
    controller.moveSprite(mySprite2)
    music.play(music.createSong(assets.song`FNAF DARKENED TIMES THEME Inside`), music.PlaybackMode.LoopingInBackground)
    music.play(music.createSong(assets.song`FNAF Darkened Times Theme Outside`), music.PlaybackMode.LoopingInBackground)
    music.play(music.createSong(assets.song`dkbklkqbkuh`), music.PlaybackMode.LoopingInBackground)
    music.play(music.createSong(assets.song`dkbklkqbkuh`), music.PlaybackMode.LoopingInBackground)
    music.play(music.createSong(assets.song`FNAFDT MENU THEME`), music.PlaybackMode.LoopingInBackground)
    music.play(music.createSong(assets.song`Broken Sorrow`), music.PlaybackMode.LoopingInBackground)
    mySprite2.setBounceOnWall(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile96`, function (sprite, location) {
    music.stopAllSounds()
    info.startCountdown(360)
    music.play(music.createSong(assets.song`FNAF DARKEN TIMES NIGHT INSIDE`), music.PlaybackMode.LoopingInBackground)
    tiles.setCurrentTilemap(tilemap`level12`)
    controller.moveSprite(mySprite)
    scene.cameraFollowSprite(mySprite)
    myEnemy = sprites.create(assets.image`freddy standing still`, SpriteKind.Enemy)
    myEnemy.follow(mySprite, 60)
    myEnemy = sprites.create(img`
        .................
        ...22...2...22...
        ...232.222.232...
        ....2b22222b2....
        .....ccc2ff2.....
        ....22cc2ff22....
        .....223f322.....
        ...22223332222...
        ......21f12......
        ....2b32223b2....
        ....2.33ff3.2....
        ....2.2ff32.2....
        ...cc.22222.22...
        ...cc.eeeee.22...
        ...d..ee.ee..2...
        ...dd.ee.ee......
        .......b.b.......
        ......bb.bb......
        `, SpriteKind.Enemy)
    myEnemy.follow(mySprite, 100)
    myEnemy = sprites.create(img`
        . . . . . . 5 . . 5 . . . . . . 
        . . . . . . . 5 5 . . . . . . . 
        . . . . . 5 5 5 5 5 5 . . . . . 
        . . . . 5 5 f 5 5 f 5 5 . . . . 
        . . . . 5 5 f 5 5 f 5 5 . . . . 
        . . . . 5 5 4 4 4 4 5 5 . . . . 
        . . . . 5 5 f 1 f 1 5 5 . . . . 
        . . . . . 5 5 4 4 5 5 . . . . . 
        . . . . 5 b 1 1 1 1 b 5 . . . . 
        . . . . 5 . 1 1 1 1 . 5 . . . . 
        . . . . 5 . 5 1 1 5 . 5 . . . . 
        . . . . 5 . 5 5 5 5 . 5 . . . . 
        . . . . 5 . 5 . . 5 . 5 . . . . 
        . . . . . . b . . b . . . . . . 
        . . . . . . 4 . . 4 . . . . . . 
        . . . . d 4 d . . d 4 d . . . . 
        `, SpriteKind.Enemy)
    myEnemy.follow(mySprite, 60)
    myEnemy = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . a a . a a . . . . . . 
        . . . . . . a . a . . . . . . . 
        . . . . . . a . a . . . . . . . 
        . . . . . a a a a a . . . . . . 
        . . . . a f f a f f a . . . . . 
        . . . . a f f a f f a . . . . . 
        . . . . d d d c d d d . . . . . 
        . . . . . d d d d d . . . . . . 
        . . . . a b 2 2 2 b a . . . . . 
        . . . . a . 2 d 2 . a . . . . . 
        . . . . a . a d a . a . . . . . 
        . . . . a . a a a . a . . . . . 
        . . . . . . a . a . . . . . . . 
        . . . . . . b . b . . . . . . . 
        . . . . . a a . a a . . . . . . 
        `, SpriteKind.Enemy)
    myEnemy.follow(mySprite, 60)
})
scene.onOverlapTile(SpriteKind.Enemy, sprites.skillmap.islandTile7, function (sprite, location) {
    myEnemy = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . e e e . . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . e e e e e e e e . . . . . 
        . . . 2 2 2 2 2 2 2 2 . . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . 2 2 2 2 2 2 2 2 . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . 2 2 2 2 2 2 . . . . . . 
        . . e e e e e e e e e e e . . . 
        . . 2 2 2 2 2 2 2 2 . . . . . . 
        . . . . e e e . . e . . . . . . 
        . . . . 2 2 2 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    myEnemy.follow(mySprite, 120)
    music.play(music.melodyPlayable(music.footstep), music.PlaybackMode.LoopingInBackground)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile110`, function (sprite, location) {
    game.showLongText("WOW! THIS IS WHAT YE GET!!", DialogLayout.Center)
    myEnemy = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . e e e . . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . e e e e e e e e . . . . . 
        . . . 2 2 2 2 2 2 2 2 . . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . 2 2 2 2 2 2 2 2 . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . 2 2 2 2 2 2 . . . . . . 
        . . e e e e e e e e e e e . . . 
        . . 2 2 2 2 2 2 2 2 . . . . . . 
        . . . . e e e . . e . . . . . . 
        . . . . 2 2 2 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    myEnemy.follow(mySprite)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile48`, function (sprite, location) {
    game.showLongText("WOW! THIS IS WHAT YE GET!!", DialogLayout.Center)
    myEnemy = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . e e e . . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . e e e e e e e e . . . . . 
        . . . 2 2 2 2 2 2 2 2 . . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . 2 2 2 2 2 2 2 2 . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . 2 2 2 2 2 2 . . . . . . 
        . . e e e e e e e e e e e . . . 
        . . 2 2 2 2 2 2 2 2 . . . . . . 
        . . . . e e e . . e . . . . . . 
        . . . . 2 2 2 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    myEnemy.follow(mySprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.gameOver(false)
    music.play(music.createSong(assets.song`Death scream`), music.PlaybackMode.UntilDone)
    mySprite.startEffect(effects.spray, 500)
})
let mySprite2: Sprite = null
let myEnemy: Sprite = null
let mySprite: Sprite = null
music.play(music.createSong(assets.song`FNAFDT MENU THEME`), music.PlaybackMode.LoopingInBackground)
scene.setBackgroundImage(assets.image`Menu`)
game.setDialogFrame(img`
    f f f f f f f f f f f f f f f 
    f b b b b b b b b b b b f b f 
    f b b b b b b b b b b b f b f 
    f f b b b b b b b b b f b b f 
    f b f b b b b b b b b b b b f 
    f b b b b b b b b b b b b b f 
    f b b b b b b b b b b b b b f 
    f b b b b b b b b b b b b b f 
    f b b b b b b b b b b b b b f 
    f b b b b b b b b b b b b b f 
    f b b b b b b b b b b b b b f 
    f b b f f b b b b b b b b b f 
    f b b b f b b b b b b b b f f 
    f b b f b b b b b b b b b b f 
    f f f f f f f f f f f f f f f 
    `)
game.setDialogCursor(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . c c c c c c c c c c c c c c c 
    . c . . . c . c . c c . c . c . 
    . c c c . c . c c c c c . . c . 
    . . . c . c . c . c c . c . c . 
    . c c c . c . c . c c . c . c . 
    . . . . . . . . . . . . . . . . 
    . c c c c c c c c c c c c c c . 
    . . . . . . . . . . . . . . . . 
    `)
