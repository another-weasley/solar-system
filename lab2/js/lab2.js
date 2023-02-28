window.onload = function(){
    var width = window.innerWidth;
    var height = window.innerHeight;

    var canvas = document.getElementById('canvas');

    canvas.setAttribute('width',width);
    canvas.setAttribute('height',height);

    var renderer = new THREE.WebGLRenderer({canvas:canvas});
    renderer.setClearColor(0x000000);

    var scene = new THREE.Scene();

    var camera = new THREE.PerspectiveCamera(45,width/height,0.1,300000);
    camera.position.set(0,0, 15000);

    var controls = new THREE.OrbitControls(camera,renderer.domElement);


	var light = new THREE.AmbientLight(0xffffff);
	scene.add(light);

    // Sun
    var geometry = new THREE.SphereGeometry(2300, 80, 80);
    var material = new THREE.MeshNormalMaterial({wireframe: true});
    var sun = new THREE.Mesh(geometry, material);
    scene.add(sun);

    // Earth
    var geometry = new THREE.SphereGeometry(100, 40, 40);
    var material = new THREE.MeshNormalMaterial({wireframe: false});
    var earth = new THREE.Mesh(geometry, material);
    scene.add(earth);

    //Mercury
    var geometry = new THREE.SphereGeometry(60, 20, 20);
    var material = new THREE.MeshNormalMaterial({wireframe: false});
    var mercury = new THREE.Mesh(geometry, material);
    scene.add(mercury);

    //Venus
    var geometry = new THREE.SphereGeometry(90, 20, 20);
    var material = new THREE.MeshNormalMaterial({wireframe: false});
    var venus = new THREE.Mesh(geometry, material);
    scene.add(venus);

    //Mars
    var geometry = new THREE.SphereGeometry(80, 20, 20);
    var material = new THREE.MeshNormalMaterial({wireframe: false});
    var mars = new THREE.Mesh(geometry, material);
    scene.add(mars);

    var t = 0;
    var rendering = function() {
        requestAnimationFrame(rendering);

        sun.rotation.y += 0.001;

        earth.position.x = Math.sin(t*0.1)*7500;
        earth.position.z = Math.cos(t*0.1)*7500;

        mercury.position.x = Math.sin(t*0.3)*4000;
        mercury.position.z = Math.cos(t*0.3)*4000;

        venus.position.x = Math.sin(t*0.2)*5500;
        venus.position.z = Math.cos(t*0.2)*5500;

        mars.position.x = Math.sin(t*0.08)*8000;
        mars.position.z = Math.cos(t*0.08)*8000;

        t+= 0.01;
        controls.update();
        renderer.render(scene,camera);
        
    }

    rendering();

}
