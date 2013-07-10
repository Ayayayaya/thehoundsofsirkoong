#pragma strict

//why do u not use constants piece of shit
var INIT_PLAYER_SPEED = 0.1;
var INIT_PLAYER_SENS = 1.05;

var keyW = false;
var keyA = false;
var keyS = false;
var keyD = false;

var sens : float; //1.25 max
var playerSpeed : float;

//var moveX = 0;
//var moveY = 0;

function init() {
    playerSpeed = INIT_PLAYER_SPEED;
    sens = INIT_PLAYER_SENS;
}

function Start () {
    init();
    Screen.lockCursor = true;
}

function Update () {
    if (!Screen.lockCursor) 
        Screen.lockCursor = true; //fix hack
    updateView();
}

function OnGUI() {
    var oldY = Camera.main.transform.position.y;
    if (Input.GetKey("w")) keyW = true;
    else keyW = false;
    if (Input.GetKey("a")) keyA = true;
    else keyA = false;
    if (Input.GetKey("s")) keyS = true;
    else keyS = false;
    if (Input.GetKey("d")) keyD = true;
    else keyD = false;

    Camera.main.transform.position.y = oldY;

    transform.Rotate(-Input.GetAxis("Mouse Y") / sens, Input.GetAxis("Mouse X") / sens, 0, Space.Self);
    transform.LookAt(camera.transform.position + camera.transform.forward, Vector3.up);

    //with no lock
    /*
    moveX = -Input.mousePosition.x / 2;
    moveY = -Input.mousePosition.y / 2;
    moveX = -Input.GetAxis("Mouse X");
    moveY = -Input.GetAxis("Mouse Y");
    */
}

function updateView() {
    if (keyW) 
        transform.Translate(0, 0, playerSpeed, Camera.main.transform);
    if (keyA)
        transform.Translate(-playerSpeed, 0, 0, Camera.main.transform);
    if (keyS)
        transform.Translate(0, 0, -playerSpeed, Camera.main.transform);
    if (keyD)
        transform.Translate(playerSpeed, 0, 0, Camera.main.transform);
    /*
    var longitude = moveX;
    var latitude = moveY;

    moveX = 0;
    moveY = 0;

    var phi = (90 - latitude) * (Mathf.PI / 180);
    var theta = (longitude - 90) * (Mathf.PI / 180);
 
    var lookat = new Vector3(0, 0, 0);
    lookat.x = Camera.main.transform.position.x + Mathf.Sin(phi) * Mathf.Cos(theta);
    lookat.y = Camera.main.transform.position.y - Mathf.Cos(phi);
    lookat.z = Camera.main.transform.position.z + Mathf.Sin(phi) * Mathf.Sin(theta);

    transform.LookAt(lookat, Vector3.up);
    */
}
