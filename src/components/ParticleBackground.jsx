import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticleBackground = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const options = {
        background: { color: { value: "transparent" } },
        fpsLimit: 120,
        interactivity: {
            events: {
                onHover: { enable: true, mode: "grab" },
                resize: true,
            },
            modes: {
                grab: { distance: 150, links: { opacity: 0.8 } }
            },
        },
        particles: {
            color: { value: "#6366f1" }, // Zenvy style indigo
            links: {
                color: "#c4b5fd", // Lighter purple for links
                distance: 140,
                enable: true,
                opacity: 0.25,
                width: 1,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: { default: "out" },
                random: false,
                speed: 0.6,
                straight: false,
            },
            number: { density: { enable: true, area: 1000 }, value: 90 },
            opacity: { value: 0.7 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 2.5 } },
        },
        detectRetina: true,
    };

    if (init) {
        return (
            <Particles
                id="tsparticles"
                particlesLoaded={async (container) => {}}
                options={options}
                style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}
            />
        );
    }

    return <></>;
};

export default ParticleBackground;
