import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Stage, PresentationControls } from '@react-three/drei';

function Model(props: any) {
    const { scene } = useGLTF('/models/project_name.glb');
    return <primitive object={scene} scale={4.5} {...props} />;
}

const ModelViewer: React.FC = () => {
    return (
        <Canvas dpr={[1, 2]} camera={{ fov: 45, position: [0, 0, 7] }} style={{ position: 'absolute', width: '100%', height: '100%' }}>
            <React.Suspense fallback={null}>
                <PresentationControls
                    speed={1.5}
                    global
                    zoom={0.5}
                    polar={[-0.1, Math.PI / 4]}
                    cursor={true}
                >
                    <Stage environment="city" intensity={1} shadows={false}>
                        <Model />
                    </Stage>
                </PresentationControls>
            </React.Suspense>
        </Canvas>
    );
};

export default ModelViewer;
