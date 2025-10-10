---
title: "Robust image denoising"
date: 2024-05-01
image: "/assets/my_img/projects/robust_den/thumb.png"
description: "Robust blind-image denoising using instance normalization"
---

### Robust Blind Image Denoising via Instance Normalization

**Published as MS Thesis:**
[![Static Badge](https://img.shields.io/badge/OSU-Thesis-red)](https://etd.ohiolink.edu/acprod/odb_etd/r/etd/search/10?p10_accession_num=osu1714849501121502&clear=10&session=128907745351327){:target="_blank"}

<center><img src="/assets/my_img/projects/robust_den/result.png"></center>
<center>Our instance normalization method (In-DnCNN) outperforms other state-of-the-art in terms of robustness</center>

<p style="text-align: justify;">
Image denoisers are a widely applicable tool in many image inverse problems like
compressive sensing, deblurring, in-painting, super-resolution, etc. Various
algorithmic approaches for denoising have been studied in the past decades.
However, data-driven denoising methods, which learn to denoise images from large
image datasets using deep neural networks, have demonstrated far superior
performance compared to the classical algorithmic methods while having much
faster inference times. While non-blind methods require knowledge of the noise
level contained within the image, blind methods which require no such
information are more practical. However, the performance of many recent
state-of-the-art blind denoisers depend heavily on the noise levels used during
training. In more recent work, ideas of inducing scale and normalization
equivariance properties in denoisers have been explored in order to make
denoisers more robust to changes in noise levels from training to test data.
</p>

<p style="text-align: justify;">
In our work we extend upon this idea, where we introduce a method to make any
given denoiser normalization equivariant using a simple idea of instance
normalization, which improves the noise level robustness of the denoiser by a
significantly large margin with minimal change to the underlying architecture.
In this thesis, we theoretically formulate our idea from the perspective of
minimizers of the Wasserstein-1 distance between empirical distributions of
training and test data, and propose a more practically feasible 2-pixel
approximation that yields a quantile-based instance normalization method which
makes our proposed normalization more robust to outlier pixels in images. Our
instance normalization method can be implemented as a straightforward extension
of any denoising architecture, thus leveraging the inherent qualities of the
underlying denoiser, without compromising on robustness and qualitative
performance.
</p>