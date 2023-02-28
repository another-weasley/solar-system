window.onload = function(){
    var width = window.innerWidth;
    var height = window.innerHeight;

    var canvas = document.getElementById('canvas');

    canvas.setAttribute('width',width);
    canvas.setAttribute('height',height);

    var renderer = new THREE.WebGLRenderer({canvas:canvas});
    renderer.setClearColor(0xffffff);

    var scene = new THREE.Scene();

    var camera = new THREE.PerspectiveCamera(45,width/height,0.1,8000);
    camera.position.set(0,0,5500);

    var controls = new THREE.OrbitControls(camera,renderer.domElement);


    var rendering = function() {
        requestAnimationFrame(rendering);
        controls.update();
        renderer.render(scene,camera);
    };

    rendering();

	var light = new THREE.AmbientLight(0xffffff);
	scene.add(light);


    var three_torus = function()
    {
        var geometry = new THREE.TorusGeometry(500, 200, 300, 100);
        var material = new THREE.MeshNormalMaterial({ color: 0x00ff00, wireframe: false });
        var torus_1 = new THREE.Mesh(geometry, material);
        torus_1.position.x = 100;
        torus_1.position.y = 100;
        scene.add(torus_1);

        var geometry = new THREE.TorusGeometry(200, 90, 10, 10);
        var material = new THREE.MeshBasicMaterial({ color: 0x40BCD0, wireframe: true });
        var torus_2 = new THREE.Mesh(geometry, material);
        torus_2.position.x = 1100;
        torus_2.position.y = 100;
        scene.add(torus_2);

        var geometry = new THREE.TorusGeometry(300, 30, 3, 3);
        var material = new THREE.MeshBasicMaterial({ color: 0x187810, wireframe: false });
        var torus_3 = new THREE.Mesh(geometry, material);
        torus_3.position.x = -1100;
        torus_3.position.y = -100;
        scene.add(torus_3);
    }

    var torus_and_ring = function()
    {
        var geometry = new THREE.TorusGeometry(500, 200, 100, 100);
        var material = new THREE.MeshNormalMaterial({ color: 0x00ff00, wireframe: false });
        var torus_0 = new THREE.Mesh(geometry, material);
        torus_0.position.x = 100;
        torus_0.position.y = 100;
        scene.add(torus_0);

        var geometry = new THREE.RingGeometry(300, 200, 32);
        var material = new THREE.MeshNormalMaterial({ color: 0x00ff00, wireframe: false });
        var ring_0 = new THREE.Mesh(geometry, material);
        ring_0.position.x = 100;
        ring_0.position.y = 1100;
        scene.add(ring_0);
    }

    var olymp = function()
    {
        var geometry = new THREE.RingGeometry(300, 250, 32);
        var material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: false });
        var olymp_1 = new THREE.Mesh(geometry, material);
        olymp_1.position.x = 0;
        olymp_1.position.y = 0;
        scene.add(olymp_1);

        var geometry = new THREE.RingGeometry(300, 250, 32);
        var material = new THREE.MeshBasicMaterial({ color: 0x000000, wireframe: false });
        var olymp_2 = new THREE.Mesh(geometry, material);
        olymp_2.position.x = 700;
        olymp_2.position.y = 0;
        scene.add(olymp_2);

        var geometry = new THREE.RingGeometry(300, 250, 32);
        var material = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: false });
        var olymp_3 = new THREE.Mesh(geometry, material);
        olymp_3.position.x = 1400;
        olymp_3.position.y = 0;
        scene.add(olymp_3);

        var geometry = new THREE.RingGeometry(300, 250, 32);
        var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: false });
        var olymp_4 = new THREE.Mesh(geometry, material);
        olymp_4.position.x = 350;
        olymp_4.position.y = -250;
        scene.add(olymp_4);
    

        var geometry = new THREE.RingGeometry(300, 250, 32);
        var material = new THREE.MeshBasicMaterial({ color: 0xffff00, wireframe: false });
        var olymp_5 = new THREE.Mesh(geometry, material);
        olymp_5.position.x = 1050;
        olymp_5.position.y = -250;
        scene.add(olymp_5);
    }

    var bad_olymp = function()
    {
        var geometry = new THREE.RingGeometry(300, 250, 32);
        var material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: false });
        var olymp_1 = new THREE.Mesh(geometry, material);
        olymp_1.position.x = 0;
        olymp_1.position.y = 0;
        scene.add(olymp_1);

        var geometry = new THREE.RingGeometry(300, 250, 32);
        var material = new THREE.MeshBasicMaterial({ color: 0x000000, wireframe: false });
        var olymp_2 = new THREE.Mesh(geometry, material);
        olymp_2.position.x = 700;
        olymp_2.position.y = 0;
        scene.add(olymp_2);

        var geometry = new THREE.RingGeometry(300, 250, 32);
        var material = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: false });
        var olymp_3 = new THREE.Mesh(geometry, material);
        olymp_3.position.x = 1400;
        olymp_3.position.y = 0;
        scene.add(olymp_3);

        var geometry = new THREE.RingGeometry(300, 250, 32);
        var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: false });
        var olymp_4 = new THREE.Mesh(geometry, material);
        olymp_4.position.x = 350;
        olymp_4.position.y = -250;
        scene.add(olymp_4);

        var geometry = new THREE.RingGeometry(100, 50, 32);
        var material = new THREE.MeshBasicMaterial({ color: 0xffff00, wireframe: false });
        var olymp_5 = new THREE.Mesh(geometry, material);
        olymp_5.position.x = 1050;
        olymp_5.position.y = -250;
        scene.add(olymp_5);
}

    var three_boxes = function()
    {
        var geometry = new THREE.BoxGeometry(1000, 1000, 1000, 5, 5, 5);
        var material = new THREE.MeshBasicMaterial({ color: 0xffff00, wireframe: true });
        var big = new THREE.Mesh(geometry, material);
        big.position.x = 0;
        big.position.y = 0;
        scene.add(big);

        var geometry = new THREE.BoxGeometry(800, 800, 800, 10, 10, 10);
        var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
        var medium = new THREE.Mesh(geometry, material);
        medium.position.x = 1100;
        medium.position.y = 0;
        scene.add(medium);

        var geometry = new THREE.BoxGeometry(600, 600, 600, 30, 30, 30);
        var material = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true });
        var small = new THREE.Mesh(geometry, material);
        small.position.x = 2000;
        small.position.y = 0;
        scene.add(small);
    }

    //three_torus();
    //torus_and_ring();
    //olymp();
    bad_olymp();
    //three_boxes();

}
