const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(68, window.innerWidth/ window.innerHeight, 0.1, 1000); 
const renderer = new THREE.WebGLRenderer();

scene.background = new THREE.Color("#E5E4E4");
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement);


//3d room

//floor
const floorGeometry = new THREE.BoxGeometry(400,1,600);
const floorMaterial = new THREE.MeshPhongMaterial( {color: "#292828"} );
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
scene.add(floor);
floor.position.y = -20
floor.position.x = -50
floor.position.z = -3
floor.rotation.y = 5


//wall
const wallGeometry = new THREE.BoxGeometry( 1, 80, 110);
const wallMaterial = new THREE.MeshBasicMaterial( {color: "#ECECEC"} );
const wall = new THREE.Mesh(wallGeometry, wallMaterial);
scene.add(wall);


wall.position.y = 35
wall.position.x =45
wall.position.z = -6
wall.rotation.y = 9.5


//window
const windowsGeometry = new THREE.BoxGeometry(15, 1, 15);
const windowsMaterial = new THREE.MeshBasicMaterial( {color: "#FFFFFF"} );
const windows = new THREE.Mesh(windowsGeometry, windowsMaterial);
scene.add(windows);

windows.material.transparent = true;
windows.material.opacity = 1; 
windows.position.y = 14
windows.position.x = -3
windows.position.z = -15
windows.rotation.y = 7.9
windows.rotation.x = 9
windows.rotation.z =2

const windowsBorderGeometry = new THREE.BoxGeometry(17, 1, 17);
const windowsBorderMaterial = new THREE.MeshBasicMaterial( {color: "#717D7E"} );
const windowsBorder = new THREE.Mesh(windowsBorderGeometry, windowsBorderMaterial);
scene.add(windowsBorder);

windowsBorder.position.y = 15
windowsBorder.position.x = -2.7
windowsBorder.position.z = -19
windowsBorder.rotation.y = 7.9
windowsBorder.rotation.x = 9
windowsBorder.rotation.z =2


//window
const windows1Geometry = new THREE.BoxGeometry(15, 0.5, 15);
const windows1Material = new THREE.MeshBasicMaterial( {color: "#FFFFFF"} );
const windows1 = new THREE.Mesh(windows1Geometry, windows1Material);
scene.add(windows1);

windows1.material.transparent = true;
windows1.material.opacity = 1; 
windows1.position.y = 14
windows1.position.x = -20
windows1.position.z = -17
windows1.rotation.y = 7.9
windows1.rotation.x = 9
windows1.rotation.z =2

const windows1BorderGeometry = new THREE.BoxGeometry(16.5, 0.5, 16.5);
const windows1BorderMaterial = new THREE.MeshBasicMaterial( {color: "#717D7E"} );
const windows1Border = new THREE.Mesh(windows1BorderGeometry, windows1BorderMaterial);
scene.add(windows1Border);

windows1Border.position.y = 14.5
windows1Border.position.x = -20.5
windows1Border.position.z = -19
windows1Border.rotation.y = 7.9
windows1Border.rotation.x = 9
windows1Border.rotation.z =2


//bed
const bedGeometry = new THREE.BoxGeometry( 32, 5, 30);
const bedMaterial = new THREE.MeshPhongMaterial( {color: "#444744"} );
const bed = new THREE.Mesh(bedGeometry, bedMaterial);
scene.add(bed);

bed.position.y = -5
bed.position.x =-16
bed.position.z =-22
bed.rotation.y = -9


//bed base
const bedBaseGeometry = new THREE.BoxGeometry( 32, 1, 30);
const bedBaseMaterial = new THREE.MeshPhongMaterial( {color: "#000000"} );
const bedBase = new THREE.Mesh(bedBaseGeometry, bedBaseMaterial);
scene.add(bedBase);

bedBase.position.y = -7
bedBase.position.x =-16
bedBase.position.z =-22
bedBase.rotation.y = -9


//head board
const headBoardGeometry = new THREE.BoxGeometry(1, 10, 36);
const headBoardMaterial = new THREE.MeshPhongMaterial( {color: "#444744"} );
const headBoard = new THREE.Mesh(headBoardGeometry, headBoardMaterial);
scene.add(headBoard);

headBoard.position.y = -2.45
headBoard.position.x =-31.48
headBoard.position.z =-18.6
headBoard.rotation.y = -9


//bed pillow
const bedPillowGeometry = new THREE.CylinderGeometry( 2, 3.5, 4, 30 );
const bedPillowMaterial = new THREE.MeshBasicMaterial( {color: "#FFFFFF"} );
const bedPillow = new THREE.Mesh(bedPillowGeometry, bedPillowMaterial);
scene.add(bedPillow);

bedPillow.position.y = -2.45
bedPillow.position.x =-26
bedPillow.position.z =-18.6
bedPillow.rotation.y = 
bedPillow.rotation.x = 17.5


//chairbody
const chairBodyGeometry = new THREE.BoxGeometry(1, 25, 15);
const chairBodyMaterial = new THREE.MeshLambertMaterial( {color: "#1F5516"} )
const chairBody = new THREE.Mesh(chairBodyGeometry, chairBodyMaterial);
scene.add(chairBody);

chairBody.position.y = -5
chairBody.position.x =-1
chairBody.position.z =1
chairBody.rotation.y = -9


//chair support
const chairSupportGeometry = new THREE.BoxGeometry(1, 8, 15);
const chairSupportMaterial = new THREE.MeshLambertMaterial( {color: "#1F5516"} );
const chairSupport = new THREE.Mesh(chairSupportGeometry, chairSupportMaterial);
scene.add(chairSupport);

chairSupport.position.y = -14
chairSupport.position.x =10
chairSupport.position.z =-2.7
chairSupport.rotation.y = -9

const chairSeatGeometry = new THREE.BoxGeometry(12, .5, 15);
const chairSeatMaterial = new THREE.MeshBasicMaterial( {color: "#1F5516"} );
const chairSeat = new THREE.Mesh(chairSeatGeometry, chairSeatMaterial);
scene.add(chairSeat);

chairSeat.position.y = -10
chairSeat.position.x =6
chairSeat.position.z =-1.2
chairSeat.rotation.y = -6


//table
const tableBodyGeometry = new THREE.BoxGeometry( 50, .5, 18);
const tableBodyMaterial = new THREE.MeshPhongMaterial( {color: "#181717"} );
const tableBody = new THREE.Mesh(tableBodyGeometry, tableBodyMaterial);
scene.add(tableBody);

tableBody.position.y = -2.5
tableBody.position.x =20
tableBody.rotation.y = -58


//leg1
const leg1Geometry = new THREE.CylinderGeometry( 0.5, 0.5, 15, 32 );
const leg1Material = new THREE.MeshLambertMaterial( {color: "181717"} );
const leg1 = new THREE.Mesh( leg1Geometry, leg1Material );
scene.add(leg1);

leg1Geometry.scale(1.5,1,2);
leg1.position.y = -10
leg1.position.x = 30
leg1.rotation.y = 5
leg1.position.z = 15


//leg2
const leg2Geometry = new THREE.CylinderGeometry( 0.5, 0.5, 15, 32 );
const leg2Material = new THREE.MeshLambertMaterial( {color: "181717"} );
const leg2 = new THREE.Mesh( leg2Geometry, leg2Material );
scene.add( leg2);

leg2Geometry.scale (1.5,1,2)
leg2.position.y = -11
leg2.position.x = 44
leg2.rotation.y = 5
leg2.position.z = 15


//leg3
const leg3Geometry = new THREE.CylinderGeometry( 0.5, 0.5, 13, 32 );
const leg3Material = new THREE.MeshLambertMaterial( {color: "181717"} );
const leg3 = new THREE.Mesh( leg3Geometry, leg3Material );
scene.add( leg3 );

leg3Geometry.scale (1.5,1,2)
leg3.position.y = -9
leg3.position.x = 12.5
leg3.rotation.y = 9
leg3.position.z = -29


//leg4
const leg4Geometry = new THREE.CylinderGeometry( 0.5, 0.5, 12, 32 );
const leg4Material = new THREE.MeshLambertMaterial( {color: "181717"} );
const leg4 = new THREE.Mesh( leg4Geometry, leg4Material);
scene.add( leg4 );

leg4Geometry.scale (1.5,1,2)
leg4.position.y = -10
leg4.position.x = 24
leg4.rotation.y = 9
leg4.position.z = -27


//keyboard
const keyboardGeometry = new THREE.BoxGeometry( 10, .4, 5);
const keyboardMaterial = new THREE.MeshLambertMaterial( {color: "#6A6A6A"} );
const keyboard = new THREE.Mesh(keyboardGeometry, keyboardMaterial);
scene.add(keyboard);

keyboard.position.y = -2.2
keyboard.position.x = 20
keyboard.position.z = 13
keyboard.rotation.y = 30
keyboard.rotation.z = 0


//mouse
const mouseGeometry = new THREE.BoxGeometry( 2, 0.6, 2);
const mouseMaterial = new THREE.MeshLambertMaterial( {color: "#6A6A6A"} );
const mouse = new THREE.Mesh(mouseGeometry, mouseMaterial);
scene.add(mouse);

mouse.position.y = -2.2
mouse.position.x = 19
mouse.position.z = 3
mouse.rotation.y = 30
mouse.rotation.z = 0


//bowl
const bowlGeometry = new THREE.CylinderGeometry( 2, 0.6, 2);
const bowlMaterial = new THREE.MeshLambertMaterial( {color: "#6A6A6A"} );
const bowl = new THREE.Mesh(bowlGeometry, bowlMaterial);
scene.add(bowl);

bowl.position.y = -2.2
bowl.position.x = 25
bowl.position.z = 1
bowl.rotation.y = 30
bowl.rotation.z = 0


//lamp 
const lampBodyGeometry = new THREE.CylinderGeometry( -.4, 1, 6);
const lampBodyMaterial = new THREE.MeshLambertMaterial( {color: "#6A6A6A"} );
const lampBody = new THREE.Mesh(lampBodyGeometry, lampBodyMaterial );
scene.add( lampBody);

lampBody.position.y = 1
lampBody.position.x = 16


//lamp head
const lampHeadGeometry = new THREE.CylinderGeometry( 1, 2, 4, 15);
const lampHeadMaterial = new THREE.MeshLambertMaterial( {color: "#6A6A6A"} );
const lampHead = new THREE.Mesh( lampHeadGeometry, lampHeadMaterial );
scene.add( lampHead );

lampHead.position.y = 5
lampHead.position.x = 16		
lampHead.rotation.x = -0.9


//lamp bulb
const lampBulbGeometry = new THREE.ConeGeometry( .5, 4, 30 );
const lampBulbMaterial = new THREE.MeshBasicMaterial( {color: "#C7D878"} );
const lampBulb = new THREE.Mesh( lampBulbGeometry, lampBulbMaterial );
scene.add( lampBulb );

lampBulb.position.y = 5
lampBulb.position.x = 16		
lampBulb.rotation.x = -0.9


//Monitor
const monitorGeometry = new THREE.BoxGeometry( 1, 4, 8);
const monitorMaterial = new THREE.MeshBasicMaterial( {color: "#272727"} );
const monitor = new THREE.Mesh(monitorGeometry, monitorMaterial);
scene.add(monitor);

monitor.position.y = 2
monitor.position.x =12
monitor.position.z = 22
monitor.rotation.y = 9.5


//monitor screen
const monitorScreenGeometry = new THREE.BoxGeometry( .2, 3.5, 7);
const monitorScreenMaterial = new THREE.MeshPhysicalMaterial( {color: "#000000"} );
const monitorScreen = new THREE.Mesh(monitorScreenGeometry, monitorScreenMaterial);
scene.add(monitorScreen);

monitorScreen.position.y = 2
monitorScreen.position.x =11
monitorScreen.position.z = 22.5
monitorScreen.rotation.y = 9.5


//Monitor Stand
const monitorStandGeometry = new THREE.CylinderGeometry( .4, .3, 4);
const monitorbase = new THREE.MeshBasicMaterial( {color: "#272727"} );
const monitorStand = new THREE.Mesh( monitorStandGeometry, monitorbase );
scene.add( monitorStand );

monitorStand.position.y = 0
monitorStand.position.x =22
monitorStand.position.z = 14
monitorStand.rotation.y = 4


//system unit
const systemUnitGeometry = new THREE.BoxGeometry( 5, 6, 2);
const systemUnitMaterial = new THREE.MeshLambertMaterial( {color: "#272727"} );
const systemUnit = new THREE.Mesh(systemUnitGeometry, systemUnitMaterial);
scene.add(systemUnit);

systemUnit.position.y = 1
systemUnit.position.x = 18
systemUnit.position.z = 25
systemUnit.rotation.y = 19


//system unit design
const systemUnitDesignGeometry = new THREE.BoxGeometry( 2, 4, 1);
const systemUnitDesignMaterial = new THREE.MeshLambertMaterial( {color: "#717D7E"} );
const systemUnitDesign = new THREE.Mesh(systemUnitDesignGeometry, systemUnitDesignMaterial);
scene.add(systemUnitDesign);

systemUnitDesign.position.y = 1
systemUnitDesign.position.x = 14.5
systemUnitDesign.position.z = 26
systemUnitDesign.rotation.y = 4


//Book 1
const book1Geometry = new THREE.BoxGeometry( 6, 5, 0.8);
const book1Material = new THREE.MeshLambertMaterial( {color: "#185DD7"} );
const book1 = new THREE.Mesh(book1Geometry, book1Material);
scene.add(book1);
book1.position.y = 1
book1.position.x = 10
book1.position.z = -1
book1.rotation.y = 3.9


//Book 2
const book2Geometry = new THREE.BoxGeometry( 6, 5, 0.1);
const book2Material = new THREE.MeshLambertMaterial( {color: "#86D718"} );
const book2 = new THREE.Mesh(book2Geometry, book2Material);
scene.add(book2);

book2.position.y = 1
book2.position.x = 10
book2.position.z = -2	
book2.rotation.y = 3.7


//Book 3
const book3Geometry = new THREE.BoxGeometry( 6, 5, 0.7);
const book3Material = new THREE.MeshLambertMaterial( {color: "#185DD7"} );
const book3 = new THREE.Mesh(book3Geometry, book3Material);
scene.add(book3);

book3.position.y = 1
book3.position.x = 10
book3.position.z = 2
book3.rotation.y = 3.7


//Light
const light1 = new THREE.AmbientLight( 0x404040 );
scene.add( light1 );

const light2 = new THREE.PointLight( 0xffff00, 1.2, 200 );
light2.position.set( 4, 30, 20 );
scene.add( light2 );

const sphereSize = 1;
const pointLightHelper = new THREE.PointLightHelper( light2, sphereSize );
scene.add( pointLightHelper );


//scenecamera
camera.position.z= 40;
camera.position.x= -7;
camera.rotation.y= -0.5;
renderer.render(scene, camera); 
