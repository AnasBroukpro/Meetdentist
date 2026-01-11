document.addEventListener('DOMContentLoaded', () => {
    
    /* --- Mobile Menu --- */
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close menu when clicking a link
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    /* --- FAQ Accordion --- */
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const btn = item.querySelector('.faq-btn');
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('i[data-lucide="chevron-down"]');

        btn.addEventListener('click', () => {
            // Close others
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.querySelector('.faq-answer').classList.add('hidden');
                    otherItem.querySelector('.faq-btn').classList.remove('bg-brand-mint');
                    otherItem.querySelector('.faq-btn').classList.add('bg-white');
                    const otherIcon = otherItem.querySelector('i[data-lucide="chevron-down"]');
                    if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
                }
            });

            // Toggle current
            const isHidden = answer.classList.contains('hidden');
            if (isHidden) {
                answer.classList.remove('hidden');
                btn.classList.remove('bg-white');
                btn.classList.add('bg-brand-mint');
                if (icon) icon.style.transform = 'rotate(180deg)';
            } else {
                answer.classList.add('hidden');
                btn.classList.remove('bg-brand-mint');
                btn.classList.add('bg-white');
                if (icon) icon.style.transform = 'rotate(0deg)';
            }
        });
    });

    /* --- Testimonials Carousel --- */
    const testimonials = [
        {
            title: "Smiling Brighter After Every Visit",
            text: "I used to fear the dentist, but Smiluxe changed that. Gentle care, friendly staff, and a clean clinic make every visit a great experience.",
            author: "Nikola Jokić",
            img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
        },
        {
            title: "Best Dental Experience Ever",
            text: "From the moment I walked in, I felt welcomed. The doctors are incredibly professional and the results were better than I imagined.",
            author: "Sarah Connor",
            img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Professional and Caring Staff",
            text: "I highly recommend Smiluxe! They explained everything clearly and made sure I was comfortable throughout the entire procedure.",
            author: "Michael Ross",
            img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
        }
    ];

    let currentTestimonial = 0;
    const tTitle = document.getElementById('testimonial-title');
    const tText = document.getElementById('testimonial-text');
    const tAuthor = document.getElementById('testimonial-author');
    const tImg = document.getElementById('testimonial-img');
    const tCard = document.getElementById('testimonial-card');

    const updateTestimonial = () => {
        // Simple fade effect
        tCard.style.opacity = '0';
        setTimeout(() => {
            const data = testimonials[currentTestimonial];
            tTitle.textContent = data.title;
            tText.textContent = data.text;
            tAuthor.textContent = data.author;
            tImg.src = data.img;
            tCard.style.opacity = '1';
        }, 300);
    };

    document.getElementById('next-testim').addEventListener('click', () => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        updateTestimonial();
    });

    document.getElementById('prev-testim').addEventListener('click', () => {
        currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
        updateTestimonial();
    });

});
