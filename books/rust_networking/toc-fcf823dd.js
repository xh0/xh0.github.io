// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="introduction.html">Introduction</a></span></li><li class="chapter-item expanded "><li class="part-title">Part I: Foundations</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="01-fundamentals/01-introduction.html"><strong aria-hidden="true">1.</strong> Introduction to High-Performance Networking</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="01-fundamentals/02-network-stack.html"><strong aria-hidden="true">2.</strong> The Network Stack</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="01-fundamentals/03-tcp-fundamentals.html"><strong aria-hidden="true">3.</strong> TCP Fundamentals</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="01-fundamentals/04-udp-datagram.html"><strong aria-hidden="true">4.</strong> UDP Datagrams</a></span></li><li class="chapter-item expanded "><li class="part-title">Part II: Rust Networking Core</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="02-rust-networking/05-std-net.html"><strong aria-hidden="true">5.</strong> Standard Library Networking</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="02-rust-networking/06-async-rust.html"><strong aria-hidden="true">6.</strong> Asynchronous Rust</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="02-rust-networking/07-tokio-architecture.html"><strong aria-hidden="true">7.</strong> Tokio Architecture</a></span></li><li class="chapter-item expanded "><li class="part-title">Part III: High-Performance TCP Servers</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="03-tcp/08-tcp-server.html"><strong aria-hidden="true">8.</strong> TCP Server Design</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="03-tcp/09-message-framing.html"><strong aria-hidden="true">9.</strong> Message Framing</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="03-tcp/10-buffer-management.html"><strong aria-hidden="true">10.</strong> Buffer Management</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="03-tcp/11-connection-management.html"><strong aria-hidden="true">11.</strong> Connection Management</a></span></li><li class="chapter-item expanded "><li class="part-title">Part IV: Concurrency &amp; Backpressure</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="04-concurrency/12-tasks-threads.html"><strong aria-hidden="true">12.</strong> Tasks &amp; Threads</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="04-concurrency/13-channels.html"><strong aria-hidden="true">13.</strong> Channels</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="04-concurrency/14-backpressure.html"><strong aria-hidden="true">14.</strong> Backpressure</a></span></li><li class="chapter-item expanded "><li class="part-title">Part V: HTTP Performance</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="05-http/15-http-fundamentals.html"><strong aria-hidden="true">15.</strong> HTTP Fundamentals</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="05-http/16-http-servers.html"><strong aria-hidden="true">16.</strong> HTTP Servers</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="05-http/17-http-clients.html"><strong aria-hidden="true">17.</strong> HTTP Clients</a></span></li><li class="chapter-item expanded "><li class="part-title">Part VI: Performance Engineering</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="06-performance/18-serialization.html"><strong aria-hidden="true">18.</strong> Serialization Performance</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="06-performance/19-zero-copy.html"><strong aria-hidden="true">19.</strong> Zero-Copy Networking</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="06-performance/26-benchmarking.html"><strong aria-hidden="true">20.</strong> Benchmarking Methodology</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="06-performance/27-load-testing.html"><strong aria-hidden="true">21.</strong> Load Testing</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="06-performance/28-profiling.html"><strong aria-hidden="true">22.</strong> Profiling Systems</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="06-performance/29-optimization-methodology.html"><strong aria-hidden="true">23.</strong> Optimization Methodology</a></span></li><li class="chapter-item expanded "><li class="part-title">Part VII: Security &amp; Hardening</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="07-security/24-tls-performance.html"><strong aria-hidden="true">24.</strong> TLS Performance</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="07-security/25-secure-design.html"><strong aria-hidden="true">25.</strong> Secure Network Design</a></span></li><li class="chapter-item expanded "><li class="part-title">Part VIII: Reliability &amp; Fault Tolerance</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="08-reliability/30-timeouts.html"><strong aria-hidden="true">26.</strong> Timeouts</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="08-reliability/31-retries.html"><strong aria-hidden="true">27.</strong> Retries and Backoff</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="08-reliability/32-graceful-shutdown.html"><strong aria-hidden="true">28.</strong> Graceful Shutdown</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="08-reliability/33-failure-handling.html"><strong aria-hidden="true">29.</strong> Failure Handling</a></span></li><li class="chapter-item expanded "><li class="part-title">Part IX: Observability &amp; Tracing</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="09-observability/34-structured-logging.html"><strong aria-hidden="true">30.</strong> Structured Logging</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="09-observability/35-metrics.html"><strong aria-hidden="true">31.</strong> Metrics Collection</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="09-observability/36-distributed-tracing.html"><strong aria-hidden="true">32.</strong> Distributed Tracing</a></span></li><li class="chapter-item expanded "><li class="part-title">Part X: Advanced Systems Programming</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="10-advanced/20-socket-internals.html"><strong aria-hidden="true">33.</strong> Socket Internals</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="10-advanced/21-event-driven-io.html"><strong aria-hidden="true">34.</strong> Event-Driven I/O</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="10-advanced/22-cpu-cache.html"><strong aria-hidden="true">35.</strong> CPU Cache Behavior</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="10-advanced/23-threads-affinity.html"><strong aria-hidden="true">36.</strong> Threads and CPU Affinity</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="10-advanced/37-production-service.html"><strong aria-hidden="true">37.</strong> Designing Production Services</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="10-advanced/38-api-architecture.html"><strong aria-hidden="true">38.</strong> High-Performance API Architecture</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="10-advanced/39-databases.html"><strong aria-hidden="true">39.</strong> Database Connection Management</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="10-advanced/40-messaging.html"><strong aria-hidden="true">40.</strong> Messaging Systems</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="10-advanced/41-binary-protocols.html"><strong aria-hidden="true">41.</strong> High-Throughput Binary Protocols</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="10-advanced/42-lock-free.html"><strong aria-hidden="true">42.</strong> Lock-Free Designs</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="10-advanced/43-memory-allocation.html"><strong aria-hidden="true">43.</strong> Memory Allocation</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="10-advanced/44-batching.html"><strong aria-hidden="true">44.</strong> Batching</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="10-advanced/45-kernel-tuning.html"><strong aria-hidden="true">45.</strong> Kernel Tuning</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="10-advanced/46-unit-testing.html"><strong aria-hidden="true">46.</strong> Unit Testing Network Code</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="10-advanced/47-integration-testing.html"><strong aria-hidden="true">47.</strong> Integration Testing</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="10-advanced/48-property-based-testing.html"><strong aria-hidden="true">48.</strong> Property-Based Testing</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="10-advanced/49-fuzz-testing.html"><strong aria-hidden="true">49.</strong> Fuzz Testing</a></span></li><li class="chapter-item expanded "><li class="part-title">Part XI: Capstone Projects</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="11-projects/index.html"><strong aria-hidden="true">50.</strong> Capstone Projects Overview</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="11-projects/01-async-tcp-echo.html"><strong aria-hidden="true">51.</strong> Project 1: Async TCP Echo Server</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="11-projects/02-binary-protocol-server.html"><strong aria-hidden="true">52.</strong> Project 2: Binary Protocol Server</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="11-projects/03-production-http-api.html"><strong aria-hidden="true">53.</strong> Project 3: Production HTTP API</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="11-projects/04-reverse-proxy.html"><strong aria-hidden="true">54.</strong> Project 4: High-Performance Reverse Proxy</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="11-projects/05-production-network-agent.html"><strong aria-hidden="true">55.</strong> Project 5: Production Network Agent</a></span></li><li class="chapter-item expanded "><li class="spacer"></li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="glossary.html"><strong aria-hidden="true">56.</strong> Glossary of Terms</a></span></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split('#')[0].split('?')[0];
        if (current_page.endsWith('/')) {
            current_page += 'index.html';
        }
        const links = Array.prototype.slice.call(this.querySelectorAll('a'));
        const l = links.length;
        for (let i = 0; i < l; ++i) {
            const link = links[i];
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#') && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The 'index' page is supposed to alias the first chapter in the book.
            // Check both with and without the '.html' suffix to be robust against pretty URLs
            if (link.href.replace(/\.html$/, '') === current_page.replace(/\.html$/, '')
                || i === 0
                && path_to_root === ''
                && current_page.endsWith('/index.html')) {
                link.classList.add('active');
                let parent = link.parentElement;
                while (parent) {
                    if (parent.tagName === 'LI' && parent.classList.contains('chapter-item')) {
                        parent.classList.add('expanded');
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', e => {
            if (e.target.tagName === 'A') {
                const clientRect = e.target.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                sessionStorage.setItem('sidebar-scroll-offset', clientRect.top - sidebarRect.top);
            }
        }, { passive: true });
        const sidebarScrollOffset = sessionStorage.getItem('sidebar-scroll-offset');
        sessionStorage.removeItem('sidebar-scroll-offset');
        if (sidebarScrollOffset !== null) {
            // preserve sidebar scroll position when navigating via links within sidebar
            const activeSection = this.querySelector('.active');
            if (activeSection) {
                const clientRect = activeSection.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                const currentOffset = clientRect.top - sidebarRect.top;
                this.scrollTop += currentOffset - parseFloat(sidebarScrollOffset);
            }
        } else {
            // scroll sidebar to current active section when navigating via
            // 'next/previous chapter' buttons
            const activeSection = document.querySelector('#mdbook-sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        const sidebarAnchorToggles = document.querySelectorAll('.chapter-fold-toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(el => {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define('mdbook-sidebar-scrollbox', MDBookSidebarScrollbox);


// ---------------------------------------------------------------------------
// Support for dynamically adding headers to the sidebar.

(function() {
    // This is used to detect which direction the page has scrolled since the
    // last scroll event.
    let lastKnownScrollPosition = 0;
    // This is the threshold in px from the top of the screen where it will
    // consider a header the "current" header when scrolling down.
    const defaultDownThreshold = 150;
    // Same as defaultDownThreshold, except when scrolling up.
    const defaultUpThreshold = 300;
    // The threshold is a virtual horizontal line on the screen where it
    // considers the "current" header to be above the line. The threshold is
    // modified dynamically to handle headers that are near the bottom of the
    // screen, and to slightly offset the behavior when scrolling up vs down.
    let threshold = defaultDownThreshold;
    // This is used to disable updates while scrolling. This is needed when
    // clicking the header in the sidebar, which triggers a scroll event. It
    // is somewhat finicky to detect when the scroll has finished, so this
    // uses a relatively dumb system of disabling scroll updates for a short
    // time after the click.
    let disableScroll = false;
    // Array of header elements on the page.
    let headers;
    // Array of li elements that are initially collapsed headers in the sidebar.
    // I'm not sure why eslint seems to have a false positive here.
    // eslint-disable-next-line prefer-const
    let headerToggles = [];
    // This is a debugging tool for the threshold which you can enable in the console.
    let thresholdDebug = false;

    // Updates the threshold based on the scroll position.
    function updateThreshold() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // The number of pixels below the viewport, at most documentHeight.
        // This is used to push the threshold down to the bottom of the page
        // as the user scrolls towards the bottom.
        const pixelsBelow = Math.max(0, documentHeight - (scrollTop + windowHeight));
        // The number of pixels above the viewport, at least defaultDownThreshold.
        // Similar to pixelsBelow, this is used to push the threshold back towards
        // the top when reaching the top of the page.
        const pixelsAbove = Math.max(0, defaultDownThreshold - scrollTop);
        // How much the threshold should be offset once it gets close to the
        // bottom of the page.
        const bottomAdd = Math.max(0, windowHeight - pixelsBelow - defaultDownThreshold);
        let adjustedBottomAdd = bottomAdd;

        // Adjusts bottomAdd for a small document. The calculation above
        // assumes the document is at least twice the windowheight in size. If
        // it is less than that, then bottomAdd needs to be shrunk
        // proportional to the difference in size.
        if (documentHeight < windowHeight * 2) {
            const maxPixelsBelow = documentHeight - windowHeight;
            const t = 1 - pixelsBelow / Math.max(1, maxPixelsBelow);
            const clamp = Math.max(0, Math.min(1, t));
            adjustedBottomAdd *= clamp;
        }

        let scrollingDown = true;
        if (scrollTop < lastKnownScrollPosition) {
            scrollingDown = false;
        }

        if (scrollingDown) {
            // When scrolling down, move the threshold up towards the default
            // downwards threshold position. If near the bottom of the page,
            // adjustedBottomAdd will offset the threshold towards the bottom
            // of the page.
            const amountScrolledDown = scrollTop - lastKnownScrollPosition;
            const adjustedDefault = defaultDownThreshold + adjustedBottomAdd;
            threshold = Math.max(adjustedDefault, threshold - amountScrolledDown);
        } else {
            // When scrolling up, move the threshold down towards the default
            // upwards threshold position. If near the bottom of the page,
            // quickly transition the threshold back up where it normally
            // belongs.
            const amountScrolledUp = lastKnownScrollPosition - scrollTop;
            const adjustedDefault = defaultUpThreshold - pixelsAbove
                + Math.max(0, adjustedBottomAdd - defaultDownThreshold);
            threshold = Math.min(adjustedDefault, threshold + amountScrolledUp);
        }

        if (documentHeight <= windowHeight) {
            threshold = 0;
        }

        if (thresholdDebug) {
            const id = 'mdbook-threshold-debug-data';
            let data = document.getElementById(id);
            if (data === null) {
                data = document.createElement('div');
                data.id = id;
                data.style.cssText = `
                    position: fixed;
                    top: 50px;
                    right: 10px;
                    background-color: 0xeeeeee;
                    z-index: 9999;
                    pointer-events: none;
                `;
                document.body.appendChild(data);
            }
            data.innerHTML = `
                <table>
                  <tr><td>documentHeight</td><td>${documentHeight.toFixed(1)}</td></tr>
                  <tr><td>windowHeight</td><td>${windowHeight.toFixed(1)}</td></tr>
                  <tr><td>scrollTop</td><td>${scrollTop.toFixed(1)}</td></tr>
                  <tr><td>pixelsAbove</td><td>${pixelsAbove.toFixed(1)}</td></tr>
                  <tr><td>pixelsBelow</td><td>${pixelsBelow.toFixed(1)}</td></tr>
                  <tr><td>bottomAdd</td><td>${bottomAdd.toFixed(1)}</td></tr>
                  <tr><td>adjustedBottomAdd</td><td>${adjustedBottomAdd.toFixed(1)}</td></tr>
                  <tr><td>scrollingDown</td><td>${scrollingDown}</td></tr>
                  <tr><td>threshold</td><td>${threshold.toFixed(1)}</td></tr>
                </table>
            `;
            drawDebugLine();
        }

        lastKnownScrollPosition = scrollTop;
    }

    function drawDebugLine() {
        if (!document.body) {
            return;
        }
        const id = 'mdbook-threshold-debug-line';
        const existingLine = document.getElementById(id);
        if (existingLine) {
            existingLine.remove();
        }
        const line = document.createElement('div');
        line.id = id;
        line.style.cssText = `
            position: fixed;
            top: ${threshold}px;
            left: 0;
            width: 100vw;
            height: 2px;
            background-color: red;
            z-index: 9999;
            pointer-events: none;
        `;
        document.body.appendChild(line);
    }

    function mdbookEnableThresholdDebug() {
        thresholdDebug = true;
        updateThreshold();
        drawDebugLine();
    }

    window.mdbookEnableThresholdDebug = mdbookEnableThresholdDebug;

    // Updates which headers in the sidebar should be expanded. If the current
    // header is inside a collapsed group, then it, and all its parents should
    // be expanded.
    function updateHeaderExpanded(currentA) {
        // Add expanded to all header-item li ancestors.
        let current = currentA.parentElement;
        while (current) {
            if (current.tagName === 'LI' && current.classList.contains('header-item')) {
                current.classList.add('expanded');
            }
            current = current.parentElement;
        }
    }

    // Updates which header is marked as the "current" header in the sidebar.
    // This is done with a virtual Y threshold, where headers at or below
    // that line will be considered the current one.
    function updateCurrentHeader() {
        if (!headers || !headers.length) {
            return;
        }

        // Reset the classes, which will be rebuilt below.
        const els = document.getElementsByClassName('current-header');
        for (const el of els) {
            el.classList.remove('current-header');
        }
        for (const toggle of headerToggles) {
            toggle.classList.remove('expanded');
        }

        // Find the last header that is above the threshold.
        let lastHeader = null;
        for (const header of headers) {
            const rect = header.getBoundingClientRect();
            if (rect.top <= threshold) {
                lastHeader = header;
            } else {
                break;
            }
        }
        if (lastHeader === null) {
            lastHeader = headers[0];
            const rect = lastHeader.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top >= windowHeight) {
                return;
            }
        }

        // Get the anchor in the summary.
        const href = '#' + lastHeader.id;
        const a = [...document.querySelectorAll('.header-in-summary')]
            .find(element => element.getAttribute('href') === href);
        if (!a) {
            return;
        }

        a.classList.add('current-header');

        updateHeaderExpanded(a);
    }

    // Updates which header is "current" based on the threshold line.
    function reloadCurrentHeader() {
        if (disableScroll) {
            return;
        }
        updateThreshold();
        updateCurrentHeader();
    }


    // When clicking on a header in the sidebar, this adjusts the threshold so
    // that it is located next to the header. This is so that header becomes
    // "current".
    function headerThresholdClick(event) {
        // See disableScroll description why this is done.
        disableScroll = true;
        setTimeout(() => {
            disableScroll = false;
        }, 100);
        // requestAnimationFrame is used to delay the update of the "current"
        // header until after the scroll is done, and the header is in the new
        // position.
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                // Closest is needed because if it has child elements like <code>.
                const a = event.target.closest('a');
                const href = a.getAttribute('href');
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    threshold = targetElement.getBoundingClientRect().bottom;
                    updateCurrentHeader();
                }
            });
        });
    }

    // Takes the nodes from the given head and copies them over to the
    // destination, along with some filtering.
    function filterHeader(source, dest) {
        const clone = source.cloneNode(true);
        clone.querySelectorAll('mark').forEach(mark => {
            mark.replaceWith(...mark.childNodes);
        });
        dest.append(...clone.childNodes);
    }

    // Scans page for headers and adds them to the sidebar.
    document.addEventListener('DOMContentLoaded', function() {
        const activeSection = document.querySelector('#mdbook-sidebar .active');
        if (activeSection === null) {
            return;
        }

        const main = document.getElementsByTagName('main')[0];
        headers = Array.from(main.querySelectorAll('h2, h3, h4, h5, h6'))
            .filter(h => h.id !== '' && h.children.length && h.children[0].tagName === 'A');

        if (headers.length === 0) {
            return;
        }

        // Build a tree of headers in the sidebar.

        const stack = [];

        const firstLevel = parseInt(headers[0].tagName.charAt(1));
        for (let i = 1; i < firstLevel; i++) {
            const ol = document.createElement('ol');
            ol.classList.add('section');
            if (stack.length > 0) {
                stack[stack.length - 1].ol.appendChild(ol);
            }
            stack.push({level: i + 1, ol: ol});
        }

        // The level where it will start folding deeply nested headers.
        const foldLevel = 3;

        for (let i = 0; i < headers.length; i++) {
            const header = headers[i];
            const level = parseInt(header.tagName.charAt(1));

            const currentLevel = stack[stack.length - 1].level;
            if (level > currentLevel) {
                // Begin nesting to this level.
                for (let nextLevel = currentLevel + 1; nextLevel <= level; nextLevel++) {
                    const ol = document.createElement('ol');
                    ol.classList.add('section');
                    const last = stack[stack.length - 1];
                    const lastChild = last.ol.lastChild;
                    // Handle the case where jumping more than one nesting
                    // level, which doesn't have a list item to place this new
                    // list inside of.
                    if (lastChild) {
                        lastChild.appendChild(ol);
                    } else {
                        last.ol.appendChild(ol);
                    }
                    stack.push({level: nextLevel, ol: ol});
                }
            } else if (level < currentLevel) {
                while (stack.length > 1 && stack[stack.length - 1].level > level) {
                    stack.pop();
                }
            }

            const li = document.createElement('li');
            li.classList.add('header-item');
            li.classList.add('expanded');
            if (level < foldLevel) {
                li.classList.add('expanded');
            }
            const span = document.createElement('span');
            span.classList.add('chapter-link-wrapper');
            const a = document.createElement('a');
            span.appendChild(a);
            a.href = '#' + header.id;
            a.classList.add('header-in-summary');
            filterHeader(header.children[0], a);
            a.addEventListener('click', headerThresholdClick);
            const nextHeader = headers[i + 1];
            if (nextHeader !== undefined) {
                const nextLevel = parseInt(nextHeader.tagName.charAt(1));
                if (nextLevel > level && level >= foldLevel) {
                    const toggle = document.createElement('a');
                    toggle.classList.add('chapter-fold-toggle');
                    toggle.classList.add('header-toggle');
                    toggle.addEventListener('click', () => {
                        li.classList.toggle('expanded');
                    });
                    const toggleDiv = document.createElement('div');
                    toggleDiv.textContent = '❱';
                    toggle.appendChild(toggleDiv);
                    span.appendChild(toggle);
                    headerToggles.push(li);
                }
            }
            li.appendChild(span);

            const currentParent = stack[stack.length - 1];
            currentParent.ol.appendChild(li);
        }

        const onThisPage = document.createElement('div');
        onThisPage.classList.add('on-this-page');
        onThisPage.append(stack[0].ol);
        const activeItemSpan = activeSection.parentElement;
        activeItemSpan.after(onThisPage);
    });

    document.addEventListener('DOMContentLoaded', reloadCurrentHeader);
    document.addEventListener('scroll', reloadCurrentHeader, { passive: true });
})();

