"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

type DataNetworkProps = {
  density?: "compact" | "full";
};

function createCorePoints(count: number) {
  const points: THREE.Vector3[] = [];
  const golden = Math.PI * (3 - Math.sqrt(5));

  for (let i = 0; i < count; i += 1) {
    const y = 1 - (i / (count - 1)) * 2;
    const radius = Math.sqrt(1 - y * y);
    const theta = golden * i;
    points.push(new THREE.Vector3(Math.cos(theta) * radius * 2.25, y * 1.35, Math.sin(theta) * radius * 1.05));
  }

  return points;
}

export function DataNetwork({ density = "full" }: DataNetworkProps) {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isSmall = window.matchMedia("(max-width: 767px)").matches;
    const nodeCount = density === "compact" || isSmall ? 34 : 62;
    const probe = document.createElement("canvas");
    const canRenderWebgl = Boolean(probe.getContext("webgl") || probe.getContext("experimental-webgl"));

    if (!canRenderWebgl) {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.position.set(0, 0, isSmall ? 8 : 6.6);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: !isSmall,
        alpha: true,
        powerPreference: "high-performance"
      });
    } catch {
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isSmall ? 1.4 : 1.8));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const coreMaterial = new THREE.MeshBasicMaterial({ color: 0xe89610, transparent: true, opacity: 0.95 });
    const nodeMaterial = new THREE.MeshBasicMaterial({ color: 0xf8f5ee, transparent: true, opacity: 0.84 });
    const tealLine = new THREE.LineBasicMaterial({ color: 0x48a393, transparent: true, opacity: 0.32 });
    const amberLine = new THREE.LineBasicMaterial({ color: 0xe89610, transparent: true, opacity: 0.38 });

    const core = new THREE.Mesh(new THREE.IcosahedronGeometry(0.46, 1), coreMaterial);
    group.add(core);

    const points = createCorePoints(nodeCount);
    const nodeGeometry = new THREE.SphereGeometry(isSmall ? 0.026 : 0.032, 10, 10);

    points.forEach((point, index) => {
      const node = new THREE.Mesh(nodeGeometry, index % 7 === 0 ? coreMaterial : nodeMaterial);
      node.position.copy(point);
      group.add(node);

      if (index % 3 === 0) {
        group.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), point]), amberLine));
      }
    });

    for (let i = 0; i < points.length; i += 1) {
      for (let j = i + 1; j < points.length; j += 1) {
        if (points[i].distanceTo(points[j]) < 0.82) {
          group.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints([points[i], points[j]]), tealLine));
        }
      }
    }

    const ringMaterial = new THREE.LineBasicMaterial({ color: 0xf8f5ee, transparent: true, opacity: 0.2 });
    [1.45, 2.05, 2.65].forEach((radius, index) => {
      const ring = new THREE.Line(
        new THREE.BufferGeometry().setFromPoints(
          Array.from({ length: 96 }, (_, i) => {
            const angle = (i / 95) * Math.PI * 2;
            return new THREE.Vector3(Math.cos(angle) * radius, Math.sin(angle) * radius * 0.42, 0);
          })
        ),
        ringMaterial
      );
      ring.rotation.x = Math.PI * (index === 1 ? 0.38 : -0.18);
      ring.rotation.z = Math.PI * (index * 0.16);
      group.add(ring);
    });

    let frameId = 0;
    let visible = true;
    let pointerX = 0;
    let pointerY = 0;

    const onPointerMove = (event: PointerEvent) => {
      const rect = mount.getBoundingClientRect();
      pointerX = ((event.clientX - rect.left) / rect.width - 0.5) * 0.12;
      pointerY = ((event.clientY - rect.top) / rect.height - 0.5) * 0.1;
    };

    const animate = () => {
      if (!visible) {
        frameId = 0;
        return;
      }
      group.rotation.y += reducedMotion ? 0 : 0.0022;
      group.rotation.x += (pointerY - group.rotation.x) * 0.018;
      group.rotation.z += (pointerX - group.rotation.z) * 0.018;
      core.rotation.x += reducedMotion ? 0 : 0.004;
      core.rotation.y += reducedMotion ? 0 : 0.004;
      renderer.render(scene, camera);
      if (!reducedMotion) {
        frameId = window.requestAnimationFrame(animate);
      }
    };

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !reducedMotion && frameId === 0) {
        frameId = window.requestAnimationFrame(animate);
      }
    });
    observer.observe(mount);

    const resize = () => {
      if (!mount.clientWidth || !mount.clientHeight) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
      renderer.render(scene, camera);
    };

    mount.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("resize", resize);
    resize();
    animate();

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      mount.removeEventListener("pointermove", onPointerMove);
      observer.disconnect();
      renderer.dispose();
      nodeGeometry.dispose();
      core.geometry.dispose();
      coreMaterial.dispose();
      nodeMaterial.dispose();
      tealLine.dispose();
      amberLine.dispose();
      ringMaterial.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, [density]);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full [contain:layout_paint_size]"
    />
  );
}
