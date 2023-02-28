window.onload = function () {
    var width = window.innerWidth;
    var height = window.innerHeight;

    var canvas = document.getElementById('canvas');

    canvas.setAttribute('width', width);
    canvas.setAttribute('height', height);

    var renderer = new THREE.WebGLRenderer({ canvas: canvas });
    renderer.setClearColor(0x000000);

    var scene = new THREE.Scene();

    var camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 300000);
    camera.position.set(0, 0, 15000);

    var controls = new THREE.OrbitControls(camera, renderer.domElement);


    var light = new THREE.AmbientLight(0x999999);
    scene.add(light);

    //Light
    light = new THREE.PointLight(0xffffff, 4, 200000);
    light.position.set(0, 0, 0);
    light.castShadow = true;
    light.shadow.mapSize.width = 2048;
    light.shadow.mapSize.height = 2048;
    scene.add(light);

    // звезды
    var geometry = new THREE.Geometry();
    var material = new THREE.PointsMaterial({ color: 0xffffff, opacity: 0.1, size: 1, sizeAttenuation: false });
    for (var i = 0; i < 40000; i++)
    {
        var vertex = new THREE.Vector3();
        vertex.x = Math.random()*2 - 1;
        vertex.y = Math.random()*2 - 1;
        vertex.z = Math.random()*2 - 1;
        vertex.multiplyScalar(2000);
        geometry.vertices.push(vertex);
    }
    var stars = new THREE.Points(geometry, material);
    stars.scale.set(200, 200, 200);
    scene.add(stars);

    var blue_material = new THREE.PointsMaterial({ color: 0x006dcc, opacity: 0.1, size: 1, sizeAttenuation: false });
    var blue_geometry = new THREE.Geometry();
    for (var i = 0; i < 25000; i++)
    {
        var vertex = new THREE.Vector3();
        vertex.x = Math.random()*2 - 1;
        vertex.y = Math.random()*2 - 1;
        vertex.z = Math.random()*2 - 1;
        vertex.multiplyScalar(2000);
        blue_geometry.vertices.push(vertex);
    }
    var blue_stars = new THREE.Points(blue_geometry, blue_material);
    blue_stars.scale.set(200, 200, 200);
    scene.add(blue_stars);

    // функция для орбит
    var Orbit = function (radius) {
        this.radius = radius;
        this.draw = function (scene) {
            var og = new THREE.Geometry();
            var om = new THREE.PointsMaterial({ color: 0xbfbfbf, size: 1, sizeAttenuation: false });
            for (var i = 0; i < 500; i++) 
            {
                var v = new THREE.Vector3();
                v.x = Math.sin(180 / Math.PI * i) * this.radius;
                v.z = Math.cos(180 / Math.PI * i) * this.radius;
                og.vertices.push(v);
            }
            var orb = new THREE.Points(og, om);
            scene.add(orb);
        };
    };

    // функция для планет
    var Planet = function(radius, texture)
    {
        this.radius = radius;
        this.texture = texture;
        this.init = function()
        {
            var geometry = new THREE.SphereGeometry(this.radius, 40, 40);
            var loader = new THREE.TextureLoader();
            loader.setCrossOrigin('Anonymous');
            var tex = loader.load(this.texture);
            tex.anisotropy = 8;
            var material = new THREE.MeshPhongMaterial({ map: tex});
            var planet = new THREE.Mesh(geometry, material);
            planet.castShadow = true;

            return planet;
        };
    };

    // Sun
    var geometry = new THREE.SphereGeometry(2300, 80, 80);
    var loader = new THREE.TextureLoader();
    loader.setCrossOrigin('Anonymous');
    var texture = loader.load('https://sun9-31.userapi.com/impg/AYl8ImKJxdS4l01Qswse02-WL8BnbUQfmxdxMw/jn1jXmeE-_E.jpg?size=256x128&quality=95&sign=77386998e0a3e61cd19850c1b9e64ee0&type=album');
    texture.anisotropy = 16;
    var material = new THREE.MeshPhongMaterial({ map: texture, emissive: 0xee9a4d, emissiveIntensity: 0.9 })
    var sun = new THREE.Mesh(geometry, material);
    scene.add(sun);

    // Earth
    var geometry = new THREE.SphereGeometry(100, 40, 40);
    var loader = new THREE.TextureLoader();
    loader.setCrossOrigin('Anonymous');
    var texture = loader.load('https://sun9-30.userapi.com/impg/gCapM5hYj4JgcXh6RR0oYxbL3g6ehHa0CSGkZA/dJsq_H4PZLI.jpg?size=2048x1024&quality=95&sign=77ad371aee4712f3936041281e61047b&type=album');
    texture.anisotropy = 16;
    var material = new THREE.MeshPhongMaterial({ map: texture})
    var earth = new THREE.Mesh(geometry, material);
    earth.castShadow = true;
    scene.add(earth);

    // орбита Земли
    var geometry = new THREE.Geometry();
    var material = new THREE.PointsMaterial({ color: 0xffffff, opacity: 0.3,  size: 1, sizeAttenuation: false });
    for (var i = 0; i < 200000; i++) {
        var vertex = new THREE.Vector3();
        vertex.x = Math.sin(180 / Math.PI * i) * 7500;
        vertex.z = Math.cos(180 / Math.PI * i) * 7500;
        geometry.vertices.push(vertex);
    }
    earth_orbit = new THREE.Points(geometry, material);
    earth_orbit.castShadow = true;
    scene.add(earth_orbit);

    //Mercury
    var mercury = new Planet(60, 'https://sun9-69.userapi.com/impg/M1goBy06PVmiKCrmVLj5gZJGUjSfQbCFTBfzLw/t1ypr-n2NME.jpg?size=2048x1024&quality=95&sign=02a7a1d1668eaf59d0d95b93c5d3c3de&type=album').init();
    scene.add(mercury);
    var mercury_orbit = new Orbit(4000);
    mercury_orbit.draw(scene);

    //Venus
    var venus = new Planet(90, 'https://sun9-72.userapi.com/impg/TxyIl7_o00pGTgGt0APiDl9-7wrDr9dz6AqVhg/xRkUsuSAbHY.jpg?size=1024x512&quality=95&sign=3044516b4e6fe04aab233ecca95c0578&type=album').init();
    scene.add(venus);
    var venus_orbit = new Orbit(5500);
    venus_orbit.draw(scene);

    //Mars
    var mars = new Planet(80, 'https://sun9-29.userapi.com/impg/a3x-YHP_v36lATxSqsxnG1AcgJF4hfo-vH-vPA/A2Mb0ktCmq8.jpg?size=2048x1024&quality=95&sign=07933f322856f12b3b8d0034a644cbea&type=album').init();
    scene.add(mars);
    var mars_orbit = new Orbit(8000);
    mars_orbit.draw(scene);

    //Jupiter
    var jupiter = new Planet(350, 'https://sun9-7.userapi.com/impg/_zdqZzvOGiI2SzY-4xI8Wl6Vzgi3c4TCh91Izw/j9xsBpBVQnA.jpg?size=2048x1024&quality=95&sign=5a6fa6617859460aa0f4680d3db9d75d&type=album').init();
    scene.add(jupiter);
    var jupiter_orbit = new Orbit(10700);
    jupiter_orbit.draw(scene);


    //Saturn
    var saturn = new Planet(230, 'https://sun9-11.userapi.com/impg/vchJtzkvf3fc2JWlCWviTYu2V4T4alPz2W4zWA/HysKbYm964k.jpg?size=512x512&quality=95&sign=251124082db79cccd71c72e231c941a6&type=album').init();
    scene.add(saturn);
    var saturn_orbit = new Orbit(12000);
    saturn_orbit.draw(scene);


    //Ring
    var geometry = new THREE.Geometry();
    var material = new THREE.PointsMaterial({ color: 0x3a3a3a, size: 1, sizeAttenuation: false });
    for (var i = 0; i < 20000; i++) {
        var vertex = new THREE.Vector3();
        vertex.x = Math.sin(180 / Math.PI * i) * (550 - i / 80);
        vertex.y = Math.random() * 20;
        vertex.z = Math.cos(180 / Math.PI * i) * (550 - i / 80);

        geometry.vertices.push(vertex);
    }
    ring = new THREE.Points(geometry, material);
    ring.castShadow = true;
    scene.add(ring);

    var t = 0;
    var rendering = function () {
        requestAnimationFrame(rendering);

        sun.rotation.y += 0.001;

        earth.position.x = Math.sin(t * 0.1) * 7500;
        earth.position.z = Math.cos(t * 0.1) * 7500;

        mercury.position.x = Math.sin(t * 0.3) * 4000;
        mercury.position.z = Math.cos(t * 0.3) * 4000;

        venus.position.x = Math.sin(t * 0.2) * 5500;
        venus.position.z = Math.cos(t * 0.2) * 5500;

        mars.position.x = Math.sin(t * 0.08) * 8000;
        mars.position.z = Math.cos(t * 0.08) * 8000;

        jupiter.position.x = Math.sin(t * 0.08) * 10700;
        jupiter.position.z = Math.cos(t * 0.08) * 10700;

        saturn.position.x = Math.sin(t * 0.08) * 12000;
        saturn.position.z = Math.cos(t * 0.08) * 12000;
        saturn.rotation.y += 0.08;

        ring.position.x = saturn.position.x;
        ring.position.z = saturn.position.z;
        ring.rotation.y -= 0.001;


        t += Math.PI / 180 * 2;

        controls.update();
        //camera.position.z = saturn.position.z + 1000;
        //camera.lookAt(saturn.position);
        renderer.render(scene, camera);

    }

    rendering();

}
