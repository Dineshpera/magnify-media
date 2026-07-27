'use client';

import dynamic from 'next/dynamic';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

function GrowthCoreScene() {
  const mount = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = mount.current;
    if (!element) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100);
    camera.position.set(0, 0, 8);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    element.appendChild(renderer.domElement);

    const core = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.35, 4),
      new THREE.MeshStandardMaterial({ color: '#00ff88', emissive: '#003d25', roughness: 0.2, metalness: 0.72, wireframe: true }),
    );
    scene.add(core);

    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 700;
    const positions = new Float32Array(particleCount * 3);
    for (let index = 0; index < particleCount; index += 1) {
      const radius = 2.2 + Math.random() * 2.8;
      const angle = Math.random() * Math.PI * 2;
      positions[index * 3] = Math.cos(angle) * radius;
      positions[index * 3 + 1] = (Math.random() - 0.5) * 4.8;
      positions[index * 3 + 2] = Math.sin(angle) * radius;
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particles = new THREE.Points(particlesGeometry, new THREE.PointsMaterial({ color: '#00e5ff', size: 0.025, transparent: true, opacity: 0.75 }));
    scene.add(particles);

    const curveMaterial = new THREE.LineBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.28 });
    const curvePoints = Array.from({ length: 90 }, (_, index) => new THREE.Vector3((index - 45) / 8, Math.sin(index / 8) * 1.4, Math.cos(index / 10) * 0.65));
    const curve = new THREE.Line(new THREE.BufferGeometry().setFromPoints(curvePoints), curveMaterial);
    scene.add(curve);

    scene.add(new THREE.AmbientLight('#ffffff', 1.4));
    const cyan = new THREE.PointLight('#00e5ff', 8, 20);
    cyan.position.set(4, 3, 5);
    scene.add(cyan);
    const green = new THREE.PointLight('#00ff88', 6, 18);
    green.position.set(-4, -2, 4);
    scene.add(green);

    let pointerX = 0;
    let pointerY = 0;
    let frame = 0;

    const resize = () => {
      const rect = element.getBoundingClientRect();
      renderer.setSize(rect.width, rect.height, false);
      camera.aspect = rect.width / rect.height;
      camera.updateProjectionMatrix();
    };

    const pointer = (event: PointerEvent) => {
      pointerX = (event.clientX / window.innerWidth - 0.5) * 2;
      pointerY = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    const tick = () => {
      core.rotation.x += 0.0035;
      core.rotation.y += 0.005;
      particles.rotation.y += 0.0016;
      curve.rotation.z += 0.001;
      camera.position.x += (pointerX * 0.8 - camera.position.x) * 0.035;
      camera.position.y += (-pointerY * 0.5 - camera.position.y) * 0.035;
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
      frame = requestAnimationFrame(tick);
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', pointer, { passive: true });
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', pointer);
      renderer.dispose();
      core.geometry.dispose();
      particlesGeometry.dispose();
      curve.geometry.dispose();
      element.innerHTML = '';
    };
  }, []);

  return <div ref={mount} className="growth-core" aria-hidden />;
}

export const GrowthCore3D = dynamic(() => Promise.resolve(GrowthCoreScene), { ssr: false });
