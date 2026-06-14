const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){
    e.preventDefault();
    alert("Message Sent Successfully!");
});

   <script>
        // --- Three.js Particle Background ---
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#bg'), antialias: true, alpha: true });

        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.position.setZ(30);

        // Create Particles
        const geometry = new THREE.BufferGeometry();
        const vertices = [];
        for (let i = 0; i < 5000; i++) {
            vertices.push(THREE.MathUtils.randFloatSpread(100)); // x
            vertices.push(THREE.MathUtils.randFloatSpread(100)); // y
            vertices.push(THREE.MathUtils.randFloatSpread(100)); // z
        }
        geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
        const material = new THREE.PointsMaterial({ color: 0x00d2ff, size: 0.1 });
        const points = new THREE.Points(geometry, material);
        scene.add(points);

        // Animation Loop
        function animate() {
            requestAnimationFrame(animate);
            points.rotation.y += 0.001;
            points.rotation.x += 0.0005;
            renderer.render(scene, camera);
        }

        // Handle Resize
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        animate();
    </script>