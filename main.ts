controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    fire = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpaceShip, 0, -100)
    animation.runImageAnimation(
    fire,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 1 2 . . . . . . . 
        . . . . . . 2 1 2 . . . . . . . 
        . . . . . . 2 1 2 . . . . . . . 
        . . . . . . 2 1 2 . . . . . . . 
        . . . . . . 2 1 2 . . . . . . . 
        . . . . . . 2 1 2 . . . . . . . 
        . . . . . . 2 1 2 . . . . . . . 
        . . . . . . 2 1 2 . . . . . . . 
        . . . . . . 2 1 2 . . . . . . . 
        . . . . . . 2 1 2 . . . . . . . 
        . . . . . . 2 1 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 2 1 1 1 2 . . . . . . 
        . . . . 2 1 1 1 1 1 2 . . . . . 
        . . . . 2 1 1 1 1 1 2 . . . . . 
        . . . . 2 1 1 1 1 1 2 . . . . . 
        . . . . . 2 1 1 1 3 . . . . . . 
        . . . . . 2 3 1 1 2 . . . . . . 
        . . . . . . 2 1 2 . . . . . . . 
        . . . . . . 2 1 2 . . . . . . . 
        . . . . . . . 1 3 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 2 1 1 1 2 . . . . . . 
        . . . . 2 1 1 1 1 1 2 . . . . . 
        . . . . 2 1 1 1 1 1 2 . . . . . 
        . . . . 2 1 1 1 1 1 2 . . . . . 
        . . . . . 2 3 1 1 2 . . . . . . 
        . . . . . . 3 1 3 2 . . . . . . 
        . . . . . . 2 1 2 . . . . . . . 
        . . . . . . . 1 3 . . . . . . . 
        . . . . . . . 1 3 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 1 1 2 . . . . . . 
        . . . . . 2 1 1 1 1 2 . . . . . 
        . . . . . 2 1 1 1 1 2 . . . . . 
        . . . . . 2 1 1 1 1 2 . . . . . 
        . . . . . . 2 1 1 2 . . . . . . 
        . . . . . . 3 1 1 3 . . . . . . 
        . . . . . . 3 1 1 3 . . . . . . 
        . . . . . . 3 1 1 3 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 3 3 3 3 3 3 3 . . . . 
        . . . . 3 3 1 1 1 1 1 3 3 . . . 
        . . . . 2 1 1 1 1 1 1 1 2 . . . 
        . . . . 2 2 1 1 1 1 1 2 2 . . . 
        . . . 3 3 2 3 3 1 3 3 2 3 3 . . 
        . . 3 3 . . 2 3 1 3 2 . . 3 3 . 
        . . 1 . . . 2 3 1 3 2 . . . 1 . 
        . . 1 3 . . . 3 1 3 . . . 3 1 . 
        . . . 1 1 3 3 3 3 3 3 3 1 1 . . 
        . . . . . 1 1 1 1 1 1 1 . . . . 
        . . . . . . . 2 1 2 . . . . . . 
        . . . . . . . 2 1 2 . . . . . . 
        . . . . . . . 2 1 2 . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 3 3 3 . . . . . . 
        . . . 3 3 . . . . . . . . . . . 
        . . 3 3 . . . . . . . . 3 3 . . 
        . 3 3 . . . . . . . . . . 3 3 . 
        . . . . . . . . . . . . . . 3 . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . 3 . . . . . . . . . . . . . . 
        . 3 3 . . . . . . . . . . 3 . . 
        . . 3 3 . . . . . . . . 3 3 . . 
        . . . . . . . . . . . 3 3 . . . 
        . . . . . . 3 3 3 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    200,
    false
    )
    music.zapped.play()
    fire.startEffect(effects.fire)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy(effects.disintegrate, 500)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    scene.cameraShake(4, 500)
    otherSprite.destroy(effects.disintegrate, 200)
    sprite.startEffect(effects.fire)
    sprite.startEffect(effects.disintegrate)
    music.bigCrash.play()
    info.changeLifeBy(-1)
})
let meteor: Sprite = null
let fire: Sprite = null
let SpaceShip: Sprite = null
game.splash("Meteor Avı")
game.showLongText("Yön tuşları ile hareket et. A tuşuna basıp meteorları yok et!", DialogLayout.Bottom)
effects.starField.startScreenEffect()
SpaceShip = sprites.create(img`
    . . . . . . . c d . . . . . . . 
    . . . . . . . c d . . . . . . . 
    . . . . . . . c d . . . . . . . 
    . . . . . . . c b . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . c 3 . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . 8 3 . . . . . . . 
    . . . . . . 8 8 1 a . . . . . . 
    . . . . . . 8 3 1 a . . . . . . 
    . . . . . c c c a a a . . . . . 
    . . . . 8 8 3 3 3 1 a a . . . . 
    . . 8 f f f c c a a f f a a . . 
    . 8 8 8 8 a a 3 3 3 3 1 3 a a . 
    8 8 8 8 8 8 a a 3 3 3 1 3 3 a a 
    8 8 8 8 8 8 a a 3 3 3 3 1 3 a a 
    `, SpriteKind.Player)
controller.moveSprite(SpaceShip)
SpaceShip.setStayInScreen(true)
SpaceShip.bottom = 120
info.setLife(3)
if (10 == info.score()) {
    game.over(true)
}
game.onUpdateInterval(1000, function () {
    meteor = sprites.createProjectileFromSide(img`
        . . . . . . . . . c c 8 . . . . 
        . . . . . . 8 c c c f 8 c c . . 
        . . . c c 8 8 f c a f f f c c . 
        . . c c c f f f c a a f f c c c 
        8 c c c f f f f c c a a c 8 c c 
        c c c b f f f 8 a c c a a a c c 
        c a a b b 8 a b c c c c c c c c 
        a f c a a b b a c c c c c f f c 
        a 8 f c a a c c a c a c f f f c 
        c a 8 a a c c c c a a f f f 8 a 
        . a c a a c f f a a b 8 f f c a 
        . . c c b a f f f a b b c c 6 c 
        . . . c b b a f f 6 6 a b 6 c . 
        . . . c c b b b 6 6 a c c c c . 
        . . . . c c a b b c c c . . . . 
        . . . . . c c c c c c . . . . . 
        `, 0, 75)
    meteor.setKind(SpriteKind.Enemy)
    meteor.x = randint(10, 150)
})
